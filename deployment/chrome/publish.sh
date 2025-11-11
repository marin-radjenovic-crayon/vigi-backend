#!/bin/bash
INSTANCEID=spovizz-chrome
VERSION=2.3.6

docker tag ${INSTANCEID}:latest h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
docker push h2908577.stratoserver.net:5001/spovizz/${INSTANCEID}:${VERSION}
