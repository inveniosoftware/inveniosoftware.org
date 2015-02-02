FROM ubuntu:trusty
ADD . /code
WORKDIR /code
RUN apt-get update
RUN apt-get install -y git software-properties-common python python-dev python-pip
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install bower
RUN pip install -r requirements.txt
# RUN CI=true bower install
