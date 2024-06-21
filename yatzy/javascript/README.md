# Yatzy
https://en.wikipedia.org/wiki/Yatzy

Welcome to Seed's Yatzy library!
## Requirements
* NodeJS
## Instructions
`npm run test`


## OPTIONAL docker installation
## local filesystem is mounted on Docker container so file edits can be done locally
docker build --tag seed-test:local .
docker run -it -v $PWD:/app $(docker images seed-test -aq) bash
npm i
npm run test
