const scope = require('./scope');
const fs = require('fs');
const path = require('path');

const getBrowser = async function() {
  if (!scope.browser) {
    scope.browser = await scope.driver.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox']
    });
  }
};

const navigateTo = async url => {
  await closePage();
  await getBrowser();
  scope.context.currentPage = await scope.browser.newPage();
  await scope.context.currentPage.goto('http://' + scope.appIp + url, {
    waitUntil: 'networkidle2'
  });
};

const closePage = async () => {
  // Here we check if a scenario has instantiated a browser and a current page
  if (scope.browser && scope.context.currentPage) {
    // if it has, find all the cookies, and delete them
    const cookies = await scope.context.currentPage.cookies();
    if (cookies && cookies.length > 0) {
      await scope.context.currentPage.deleteCookie(...cookies);
    }
    // close the web page down
    await scope.context.currentPage.close();
    // wipe the context's currentPage value
    scope.context.currentPage = null;
  }
};

const closeBrowser = async () => {
  if (scope.browser) {
    await scope.browser.close();
  }
};

const getElementText = async selector => {
  return await scope.context.currentPage.$eval(
    selector,
    element => element.innerText
  );
};

const takeScreenshot = async filename => {
  const page = scope.context.currentPage;
  const dir = path.dirname(`screenshots/${filename}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return await page.screenshot({
    path: `screenshots/${filename}`,
    fullPage: true
  });
};

module.exports = {
  getBrowser,
  navigateTo,
  closePage,
  closeBrowser,
  getElementText,
  takeScreenshot
};
