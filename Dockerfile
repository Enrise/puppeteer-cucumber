FROM node:12.9-alpine

# Installs latest Chromium (76) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN mkdir -p /home/node/app \
      && chown -R node:node /home/node/app

USER node

WORKDIR /home/node/app

# Copy package details
COPY ./package.json ./package-lock.json ./

# Install npm packages
RUN npm ci

ENTRYPOINT [ "node_modules/.bin/cucumber-js", "--require", "../**/{app,cucumber-puppeteer,cucumber-puppeteer-axe}/features/**/*.js", "--world-parameters", "{\"executablePath\":\"/usr/bin/chromium-browser\"}" ]
