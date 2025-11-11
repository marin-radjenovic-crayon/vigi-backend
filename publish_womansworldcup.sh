#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source ${SCRIPT_DIR}/config_womansworldcup.sh

NAME=${INSTANCEID}
#WORLDCUP
#VERSION=2.1.0

#womansworldcup
#VERSION=2.9.0
#womansworldcup dynamic
VERSION=7.8.4


docker tag ${NAME}:latest h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
docker push h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
