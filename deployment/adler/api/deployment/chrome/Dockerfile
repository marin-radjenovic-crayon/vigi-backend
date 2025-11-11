FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /home/

COPY run.sh run.sh

# install chromium-browser and cleanup.
RUN apt update && apt install -y \
    libx11-xcb1 \
    ca-certificates \
    curl \
    dbus-x11 \
    dbus \
    vim \
    --no-install-recommends \
&& curl -LO https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_124.0.6367.118-1_amd64.deb \
&& apt install -y ./google-chrome-stable_124.0.6367.118-1_amd64.deb \
&& rm google-chrome-stable_124.0.6367.118-1_amd64.deb \
&& apt autoremove \
&& apt clean \
&& apt autoclean \
&& rm -rf /var/lib/apt/lists/*

# Run your commands and add environment variables from your compose file.
CMD ["sh", "run.sh"]
