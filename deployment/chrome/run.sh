#!/bin/bash

# Start Google Chrome in headless mode with necessary flags
google-chrome --disable-gpu --no-sandbox --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 \
  --disable-web-security \
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
  --user-data-dir="/tmp"

# Check the exit status of Google Chrome
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start Google Chrome: $status" >> /var/log/chrome-startup.log
fi

# Continuously monitor the Google Chrome process
while sleep 60; do
  # Check if Google Chrome process is running
  ps aux | grep google-chrome | grep -q -v grep
  PROCESS_STATUS=$?
  if [ $PROCESS_STATUS -ne 0 ]; then
    echo "Google Chrome process has exited unexpectedly. Restarting..." >> /var/log/chrome-restart.log
    # Restart Google Chrome
    google-chrome --disable-gpu --no-sandbox --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 \
    --disable-web-security \
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
    --user-data-dir="/tmp"
  fi
done
