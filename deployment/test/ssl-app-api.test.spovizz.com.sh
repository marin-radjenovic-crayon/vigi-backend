# sudo mkdir /etc/letsencrypt/live/video.spovizz.com
sudo certbot certonly --webroot --webroot-path /data/docker-data/nginx/html -d app.test.spovizz.com -d api.test.spovizz.com --register-unsafely-without-email
