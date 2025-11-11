#!/bin/bash
docker compose -f docker-compose.dev.yml up -d --scale spovizz_chrome=1
