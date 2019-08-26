#!/bin/sh

npm install
node_modules/.bin/cucumber-js --require ../**/{app,cucumber-puppeteer}/features/**/*.js --world-parameters "{\"executablePath\":\"/usr/bin/chromium-browser\"}" $@