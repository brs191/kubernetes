evalmini
if [[ "$(docker images -q jsserver-mini:v1 2> /dev/null)" == "" ]]; then
  echo "jsserver-mini image doesn't exist. create jsserver-mini"
  docker build -t jsserver-mini:v1 ./server/
fi

kubectl create -f ./server/deployment.yaml