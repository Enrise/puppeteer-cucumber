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

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser

RUN mkdir -p /home/node/app \
    && chown -R pptruser:pptruser /home/node/app

USER pptruser

WORKDIR /home/node/app

# Copy package details
COPY ./package.json ./package-lock.json ./

# Install npm packages
RUN npm ci

ENTRYPOINT [ "node_modules/.bin/cucumber-js", "--require", "./**/features/**/*.js", "--world-parameters", "{\"executablePath\":\"/usr/bin/chromium-browser\"}" ]
