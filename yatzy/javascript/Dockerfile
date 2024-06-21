FROM node:14.16

WORKDIR /app
COPY package.json /app
COPY . /app
RUN apt-get update && apt-get install -y vim && apt-get install -y

# docker build --tag seed-test:local .
# docker run -it -v $PWD:/app $(docker images seed-test -aq) bash
# npm i
# npm run test
