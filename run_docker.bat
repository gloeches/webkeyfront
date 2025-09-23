@echo off
@echo Stopping and removing existing container 'webkeyfront'...
(docker stop webkeyfront && docker rm webkeyfront) >nul 2>&1
echo create network poseidon
docker network inspect poseidon >nul 2>&1 || docker network create poseidon
@echo creating and running docker container
@echo off
docker build -t gloeches/webkeyfront:03.01 .
docker run -d -p 8080:80 --name webkeyfront --network poseidon -e ROOT_URL="http://localhost:8085" gloeches/webkeyfront:03.01