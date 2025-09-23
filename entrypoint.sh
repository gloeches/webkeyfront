#!/bin/sh

# Line 1: Substitute environment variables and create the config file
envsubst < /usr/share/nginx/html/config.template.json > /usr/share/nginx/html/assets/config/config.json

# Line 2: Start the Nginx web server
exec nginx -g 'daemon off;'