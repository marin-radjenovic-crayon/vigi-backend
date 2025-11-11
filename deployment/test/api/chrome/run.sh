#!/bin/bash

# Start the process
google-chrome --disable-gpu --no-sandbox --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 \
	--disable-background-networking \
	--disable-default-apps \
	--disable-extensions \
	--disable-sync \
	--disable-translate \
	--headless \
	--hide-scrollbars \
	--metrics-recording-only \
	--mute-audio \
	--no-first-run \
	--safebrowsing-disable-auto-update \
	--ignore-certificate-errors \
	--ignore-ssl-errors \
	--ignore-certificate-errors-spki-list \
	--user-data-dir=/tmp

status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start google-chrome: $status"
  exit $status
fi

# Naive check runs checks once a minute to see if either of the processes exited.
# This illustrates part of the heavy lifting you need to do if you want to run
# more than one service in a container. The container exits with an error
# if it detects that either of the processes has exited.
# Otherwise it loops forever, waking up every 60 seconds

while sleep 60; do
  ps aux |grep google-chrome | grep -q -v grep
  PROCESS_1_STATUS=$?
  # If the greps above find anything, they exit with 0 status
  # If they are not both 0, then something is wrong
  if [ $PROCESS_1_STATUS -ne 0 ]; then
    echo "One of the processes has already exited."
    echo "Restarting...."
    google-chrome --disable-gpu --no-sandbox --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 \
    --disable-background-networking \
    --disable-default-apps \
    --disable-extensions \
    --disable-sync \
    --disable-translate \
    --headless \
    --hide-scrollbars \
    --metrics-recording-only \
    --mute-audio \
    --no-first-run \
    --safebrowsing-disable-auto-update \
    --ignore-certificate-errors \
    --ignore-ssl-errors \
    --ignore-certificate-errors-spki-list \
    --user-data-dir=/tmp
#    exit 1
  fi
done
