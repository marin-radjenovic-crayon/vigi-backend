#!/bin/bash

#docker-compose -f docker-compose.prod.yml up -d --scale bvr-prod=2
docker-compose --env-file .env.prod.adler -f docker-compose.prod.yml up -d
