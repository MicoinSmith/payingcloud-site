#! /bin/sh

docker run --name payingcloud-site-nginx -p 80:80 -v $PWD/src:/usr/share/nginx/html:ro -d nginx:1.11.1
