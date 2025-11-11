#!/bin/bash

docker-compose --env-file .env.prod.goldcup -f docker-compose.prod.goldcup.yml up -d
