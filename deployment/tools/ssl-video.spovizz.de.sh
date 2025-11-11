# sudo mkdir /etc/letsencrypt/live/video.spovizz.com
sudo certbot certonly --webroot --webroot-path /data/docker-data/nginx/html/video.spovizz -d video.spovizz.de --email adrian@fx1.eu
