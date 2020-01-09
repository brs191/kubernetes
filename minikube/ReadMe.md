
// Run client server in docker.
1. Create a docker network
docker network create jsNet

2. Build server-client
docker -t jsserver:v1 .
docker -t jsclient:v1 .

3. Run server-client
docker -d --net jsNet jsserver:v1
docker --net jsNet jsclient:v1

// Run client server with kubernetes minikube
1. install minikube/kubectl 

2. build server-client images with minikube docker
eval $(minikube docker-env)
docker -t jsserver-mini:v1 .
docker -t jsclient-mini:v1 .

3. deploy server using kubectl
kubectl run server --image=jsserver-mini:v1 --port=8081 --image-pull-policy=Never
//image-pull-policy=Never:: dont' look outside, we have a local image
//port=8081 this pod is accessible from port 8081 with local clusterip
//server --> name of the pod (prefix)

4. deploy client using kubectl
kubectl run client --image=jsclient-mini:v1 --image-pull-policy=Never

5. Server is accessible only via cluster ip.
find cluster ip by running "kubectl describe pod <pod-name>"
make sure to use the cluser-ip in "http-get" of client

// Create server as service
6. kubectl expose deployment server --type=LoadBalancer
minikube service server

7. We can use the Cluster-IP of service in the http-get of client.


