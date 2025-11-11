#!/bin/bash

reload_nginx() {
  echo "Reloading nginx..."
  docker exec nginx /usr/sbin/nginx -s reload
}

wait_for_healthcheck() {
  echo "Waiting for container to pass health check..."
  new_container_id="$1"
  new_container_ip=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "$new_container_id")
  healthcheck_url="http://$new_container_ip:$PORT/health"  # Using the PORT environment variable

  until $(curl --silent --fail "$healthcheck_url"); do
    sleep 1
  done
}

install_dotenv() {
  echo "Installing dotenv package..."
  sudo apt-get install -y dotenv
}

zero_downtime_deploy() {
  service_name="spovizz-api-goldcup"
  old_container_id=$(docker ps -f name="$service_name" -q | tail -n1)

  # Check if dotenv is installed, and install it if necessary
  if ! command -v dotenv &> /dev/null; then
    install_dotenv
  fi

  # Load environment variables from .env.prod.goldcup file
  eval "$(dotenv -f .env.prod.goldcup)"

  # Scale up the new containers gradually
  docker-compose --env-file .env.prod.goldcup -f ./docker-compose.prod.goldcup.yml up -d --no-deps --scale "$service_name"=2 --no-recreate "$service_name"

  # Wait for the new container to be available and pass the health check
  new_container_id=$(docker ps -f name="$service_name" -q | head -n1)
  wait_for_healthcheck "$new_container_id"

  # Start routing requests to the new container (as well as the old)
  reload_nginx

  # Take the old container offline gracefully
  docker stop "$old_container_id"
  docker rm "$old_container_id"

  echo "Scaling container down... Cleaning up."
  docker-compose --env-file .env.prod.goldcup -f ./docker-compose.prod.goldcup.yml up -d --no-deps --scale "$service_name"=1 --no-recreate "$service_name"

  # Stop routing requests to the old container
  reload_nginx
}

echo "Running zero-downtime script..."
zero_downtime_deploy
echo "Done"
