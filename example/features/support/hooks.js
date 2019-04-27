const { AfterAll, BeforeAll, Before } = require('cucumber');
const { navigateTo, closeBrowser } = require('./browser');
const puppeteer = require('puppeteer');
var scope = require('./scope');

AfterAll(async () => {
  await closeBrowser();
});

BeforeAll(async () => {
  scope.driver = puppeteer;
  scope.context = {};
});

Before(async () => {
  await navigateTo('/');
});
