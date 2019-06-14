const puppeteer = require('puppeteer');

module.exports = {
  context: {},
  currentPage: null,
  driver: puppeteer,
  appIp: null,
  debugOutput: []
};
