FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /home/

COPY run.sh run.sh

# install chromium-browser and cleanup.
RUN apt update && apt install libx11-xcb1 ca-certificates curl dbus-x11 dbus --no-install-recommends vim -y \
&& curl -LO https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
&& apt-get install -y ./google-chrome-stable_current_amd64.deb \
&& rm google-chrome-stable_current_amd64.deb \
&& apt autoremove \
&& apt clean \
&& apt autoclean \
&& rm -rf /var/lib/apt/lists/*

# Run your commands and add environment variables from your compose file.
CMD ["sh", "run.sh"]
