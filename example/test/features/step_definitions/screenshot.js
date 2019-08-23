const { Then } = require('cucumber');
const createScreenshot = require('../support/createScreenshot');

Then('I take a screenshot {string}', async function (filename) {
    await createScreenshot(filename, this.page);
});