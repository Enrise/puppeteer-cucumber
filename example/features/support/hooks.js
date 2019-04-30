const { AfterAll, BeforeAll, Before } = require('cucumber');
const puppeteer = require('puppeteer');
const { navigateTo, closeBrowser } = require('./browser');
const { getDockerContainerIp } = require('./docker');
var scope = require('./scope');

AfterAll(async () => {
  await closeBrowser();
});

BeforeAll(async () => {
  scope.driver = puppeteer;
  scope.context = {};
  scope.appIp = await getDockerContainerIp('app');
});

Before(async () => {
  await navigateTo('/');
});
