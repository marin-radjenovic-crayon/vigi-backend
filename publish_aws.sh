#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source ${SCRIPT_DIR}/config_aws.sh

NAME=${INSTANCEID}
#aws
VERSION=1.0.0

docker tag ${NAME}:latest h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
docker push h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
