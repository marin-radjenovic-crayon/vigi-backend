FROM node:20.17.0-bullseye-slim

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get -y install python3 make g++ gcc make iputils-ping dnsutils vim curl

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . ./

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
