eval $(minikube docker-env)
if [[ "$(docker images -q jsserver-mini:v1 2> /dev/null)" == "" ]]; then
  echo "jsserver-mini image doesn't exist. create jsserver-mini"
  docker build -t jsserver-mini:v1 ./server/
fi

if [[ "$(docker images -q jsclient-mini:v1 2> /dev/null)" == "" ]]; then
  echo "jsclient-mini image doesn't exist. create jsclient-mini"
  docker build -t jsclient-mini:v1 ./client/
fi

kubectl create -f ./server/deployment.yaml
kubectl create -f ./client/deployment.yaml