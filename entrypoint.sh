#!/bin/bash
set -e

mkdir -p /etc/ssl/certs

echo "Downloading DocumentDB certificate..."
curl -sSL https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem -o /etc/ssl/certs/rds-combined-ca-bundle.pem || {
    echo "Failed to download certificate"
    exit 1
}

echo "Certificate downloaded successfully"
chmod 644 /etc/ssl/certs/rds-combined-ca-bundle.pem

exec node src/index
