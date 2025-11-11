#!/bin/bash

NAMESPACE=spovizz-bild
ENV=bild

kubectl create namespace $NAMESPACE

# For Docker Registry Secret
if kubectl get secret vigital-docker-nexus -n spovizz-$ENV > /dev/null 2>&1; then
  echo "Deleting existing Docker registry secret..."
  kubectl delete secret vigital-docker-nexus -n spovizz-$ENV
fi
echo "Creating Docker registry secret..."
export $(cat .env.vigital-docker-nexus | xargs)
kubectl create secret docker-registry vigital-docker-nexus \
  --docker-server="${DOCKER_SERVER}" \
  --docker-username="${DOCKER_USERNAME}" \
  --docker-password="${DOCKER_PASSWORD}" \
  --docker-email="${DOCKER_EMAIL}" \
  -n spovizz-$ENV

# For API Config Secrets
if kubectl get secret spovizz-api-$ENV -n $NAMESPACE > /dev/null 2>&1; then
  echo "Deleting existing API config secret..."
  kubectl delete secret spovizz-api-$ENV -n $NAMESPACE
fi
echo "Creating API config secret..."
kubectl create secret generic spovizz-api-$ENV \
  --from-env-file=.env.$ENV.api -n $NAMESPACE

kubectl apply -f deployment.yaml
