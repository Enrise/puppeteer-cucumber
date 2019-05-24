const { Then } = require('cucumber');
const { takeScreenshot } = require('../support/browser');

Then('I take a screenshot with the filename {string}', async filename => {
  await takeScreenshot(filename);
});
