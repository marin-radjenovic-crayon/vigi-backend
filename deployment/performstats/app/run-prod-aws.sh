#!/bin/bash

docker compose --env-file .env.prod.aws -f docker-compose.prod.aws.yml up -d
