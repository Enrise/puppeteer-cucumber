# Docker container with Puppeteer and Cucumber-js

An image that includes a headless chrome setup with puppeteer and cucumber-js.

This image can be used to run acceptance tests with features written in cucumber.

## Use with Docker-compose

Compose file:

```yml

---
services:
  puppeteer:
    image: enrise/puppeteer-cucumber:latest
    volumes:
      - ./features:/home/node/app/features
```

Run your tests:

`docker-compose run puppeteer`

even with options:

`docker-compose run puppeteer --tags '@focus'`

## Use with Docker

Run your tests:

`` docker run -v `pwd`/features/:/home/node/app/features enrise/puppeteer-cucumber:latest ``

with option:

`` docker run -v `pwd`/features/:/home/node/app/features enrise/puppeteer-cucumber:latest --tags '@focus' ``

## Run as current user

See the example on how to run the test as the current user (especially important when creating screenshots)

## Included packages

I included a few packages to make this image more versatile.
Included packages:

- Puppeteer
- Cucumber
- Chai, Chai-http, Chai-dom, Chai-json
- Axios
- Lodash
- Cucumber-html-reporter
- Cucumber-puppeteer (this package includes a lot of [step definitions](https://github.com/patheard/cucumber-puppeteer/tree/master/features) out of the box!)
- Cucumber-puppeteer-axe (this package includes a few extra step definitions to test for accessibility)

## Example

Check [Example](example/README.md)
