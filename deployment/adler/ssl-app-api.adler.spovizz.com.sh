# sudo mkdir /etc/letsencrypt/live/video.spovizz.com
sudo certbot certonly --webroot --webroot-path /data/docker-data/nginx/html -d app.adler.spovizz.com -d api.adler.spovizz.com --register-unsafely-without-email
