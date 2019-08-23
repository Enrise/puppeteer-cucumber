#!/bin/sh

npm install
node_modules/.bin/cucumber-js --require ./**/features/**/*.js --world-parameters "{\"executablePath\":\"/usr/bin/chromium-browser\"}" $@