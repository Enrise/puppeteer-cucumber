# Docker container with Puppeteer and Cucumber-js

An image that includes a headless chrome setup with puppeteer and cucumber-js.

This image can be used to run acceptance tests with features written in cucumber.

## Usage with Docker-compose

Compose file:

```yml
...
services:
    puppeteer:
        image: enrise/puppeteer-cucumber:latest
        volumes:
            - ./features:/home/node/app/features
...
```

Run your tests:

`docker-compose run puppeteer`

With options:

`docker-compose run puppeteer --tags '@focus'`

## Usage with Docker

Run your tests:

``docker run -v `pwd`/features/:/home/node/app/features enrise/puppeteer-cucumber:latest``

with option:

``docker run -v `pwd`/features/:/home/node/app/features enrise/puppeteer-cucumber:latest --tags '@focus'``
