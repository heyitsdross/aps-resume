#!/bin/bash

docker build -t aps-resume . \
  --build-arg user="${USER}" \
  && docker run \
  -v ./local/cert:/etc/nginx/ssl:ro \
  -v ./certbot/www/:/var/www/certbot/:ro \
  --name resume-container \
  -p 8080:443/tcp \
  -p 8081:80/tcp \
  --rm \
  aps-resume:latest
