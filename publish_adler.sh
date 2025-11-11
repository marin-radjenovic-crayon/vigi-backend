#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source ${SCRIPT_DIR}/config_adler.sh

NAME=${INSTANCEID}
#ADLER OLD VERSION 2023
#VERSION=5.7.5
#ADLER NEW BASE 2024/2025
VERSION=7.0.5

docker tag ${NAME}:latest h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
docker push h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
