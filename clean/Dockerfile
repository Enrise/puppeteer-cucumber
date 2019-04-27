FROM node:11.9-alpine

# Installs latest Chromium (72) package.
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
    chromium@edge \
    nss@edge \
    freetype@edge \
    harfbuzz@edge \
    ttf-freefont@edge

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

RUN mkdir -p /home/node/app \
    && chown -R node:node /home/node/app \
    && chown -R pptruser:pptruser /home/node/app

WORKDIR /home/node/app

# Copy package details
COPY ./package.json ./package-lock.json ./

# Install npm packages
RUN npm ci

USER pptruser

ENTRYPOINT [ "node_modules/.bin/cucumber-js" ]
