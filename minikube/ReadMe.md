
// Run client server in docker.
1. Create a docker network
docker network create jsNet

2. Build server-client
docker -t jsserver:v1 .
docker -t jsclient:v1 .

3. Run server-client
docker -d --net jsNet jsserver:v1
docker --net jsNet jsclient:v1


