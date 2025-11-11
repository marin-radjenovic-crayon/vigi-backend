# sudo mkdir /etc/letsencrypt/live/video.spovizz.com
sudo certbot certonly --webroot --webroot-path /data/docker-data/nginx/html -d api.test.spovizz.com -d app.test.spovizz.com --email adrian@fx1.eu
