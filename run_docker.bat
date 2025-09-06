@echo creating and running docker container
@echo off
docker build -t gloeches/webkeyfront:03.01 .
docker run -d -p 8080:80 --name webkeyfront gloeches/webkeyfront:03.01