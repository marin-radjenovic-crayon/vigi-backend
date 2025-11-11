#!/bin/bash

docker compose --env-file .env.prod.womansworldcup -f docker-compose.prod.womansworldcup.yml up -d
