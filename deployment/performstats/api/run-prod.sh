#!/bin/bash
#docker-compose -f docker-compose.prod.yml up -d --scale bvr-prod=2
docker compose --env-file .env.prod.womansworldcup -f docker-compose.prod.womansworldcup.yml up -d --scale spovizz_chrome=1
