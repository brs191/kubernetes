
// Run client server in docker.
1. Create a docker network
docker network create jsNet
docker network inspect jsNet (containers IPV4 address --> http://172.18.0.2:8081)

2. Build server-client
docker build -t jsserver:v1 .
docker build -t jsclient:v1 .

3. Run server-client
docker run -d --net jsNet jsserver:v1
docker run --net jsNet jsclient:v1

// Run client server with kubernetes minikube
1. install minikube/kubectl 

2. build server-client images with minikube docker
eval $(minikube docker-env)
docker build -t jsserver-mini:v1 .
docker build -t jsclient-mini:v1 .

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

//Deployments

1. Using kubectl
kubectl create -f ./server/deployment.yaml
kubectl create -f ./client/deployment.yaml

<!-- Using Helm -->
1. helm init
2. helm create ./service 
3. Update deployment.yaml, service.yaml, values.yaml files
4. helm install --name server ./server (Create a deployment)
5. helm upgrade server ./server (Upgrade deployment)
6. helm install --name client ./client (create a deployment)
7. helm upgrade server ./server (upgrade deployment)



