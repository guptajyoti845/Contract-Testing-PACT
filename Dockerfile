FROM node:14

WORKDIR /app

COPY package.json .
COPY scripts .
RUN npm install

COPY . .

RUN pwd
RUN ls
RUN ls scripts

RUN echo "$PWD" && chmod 777 scripts/start_tests.sh
ENTRYPOINT ["scripts/start_tests.sh"]

# docker build -t docker-sample .
# docker build -t docker-sample --progress=plain --no-cache .
# docker run -it -p 8080:3000 docker-sample
# docker run -it -v ${PWD}:/project -p 8080:3000 docker-sample












#FROM ubuntu:latest
#USER root
#WORKDIR /app
#COPY package.json .
#RUN apt-get update
#RUN apt-get -y install curl gnupg
#RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
#RUN apt-get -y install nodejs
#RUN apt-get install -y build-essential
#RUN npm install --legacy-peer-deps
#RUN npm install yarn
#COPY . .
#RUN yarn test:pact
#CMD ["npm", "start"]
#EXPOSE 8082
## docker build -t docker-sample .
## docker run -it -p 8082:3000 docker-sample
