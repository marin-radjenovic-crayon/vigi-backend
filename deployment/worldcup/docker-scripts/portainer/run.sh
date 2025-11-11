docker run -d -p 9000:9000 -p 8000:8000 --name portainer --network=live_network --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /data/docker-data/portainer/data:/data portainer/portainer-ce

