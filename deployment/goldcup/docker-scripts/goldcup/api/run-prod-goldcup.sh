#!/bin/bash
#docker-compose -f docker-compose.prod.yml up -d --scale bvr-prod=2
docker-compose --verbose --env-file .env.prod.goldcup -f docker-compose.prod.goldcup.yml up -d --scale spovizz_chrome=1
