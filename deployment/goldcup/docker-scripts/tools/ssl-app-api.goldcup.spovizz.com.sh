# sudo mkdir /etc/letsencrypt/live/video.spovizz.com
sudo certbot certonly --webroot --webroot-path /data/docker-data/nginx/html -d app.goldcup.spovizz.com -d api.goldcup.spovizz.com --email adrian@fx1.eu
