#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source ${SCRIPT_DIR}/config_adler.sh

#docker build --build-arg IMAGE=${IMAGE} -t ${INSTANCEID} .
docker build --build-arg IMAGE=${IMAGE} -t ${INSTANCEID} .
