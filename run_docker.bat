@echo off
@echo Stopping and removing existing container 'webkeyfront'...
(docker stop webkeyfront && docker rm webkeyfront) >nul 2>&1
echo create network poseidon
docker network inspect poseidon >nul 2>&1 || docker network create poseidon
@echo creating and running docker container
@echo off
docker build -t gloeches/webkeyfront:03.02 .
docker run -d -p 8080:80 --name webkeyfront --network poseidon -e ROOT_URL="http://desarrollo:8085" -e EMAIL_URL="http://desarrollo:8095" -e FRONTEND_URL="http://desarrollo:8080" gloeches/webkeyfront:03.02