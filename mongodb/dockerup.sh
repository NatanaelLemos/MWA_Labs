#!/bin/bash

netname="mwa-net"
app="mwa-mongo"

if !(sudo docker network ls | grep -q $netname;) then
  sudo docker network create --subnet=170.255.0.0/10 $netname
fi

if sudo docker ps | awk -v app="$app" 'NR > 1 && $NF == app{ret=1; exit} END{exit !ret}'; then
    exit 0
fi

if sudo docker container ls -a | awk -v app="$app" 'NR > 1 && $NF == app{ret=1; exit} END{exit !ret}'; then
  sudo docker container rm $app -f
fi

sudo docker build -t $app .

sudo docker run -dP \
--net $netname \
--ip 170.255.0.17 \
-e MONGODB_ADMIN_USER=admin \
-e MONGODB_ADMIN_PASS=4dm1nP455w0rd \
-e MONGODB_APPLICATION_DATABASE=admin \
-e MONGODB_APPLICATION_USER=restUser \
-e MONGODB_APPLICATION_PASS=P455w0rd \
-v $app:/data/db \
-p 27017:27017 \
--name $app $app