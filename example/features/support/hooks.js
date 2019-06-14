const { AfterAll, BeforeAll, Before, After, Status } = require('cucumber');
const { navigateTo, closeBrowser } = require('./browser');
var scope = require('./scope');
const { getDockerContainerIp } = require('./docker');
const util = require('util');

AfterAll(async () => {
  await closeBrowser();
});

BeforeAll(async () => {
  scope.appIp = await getDockerContainerIp(process.env.HOST);
});

Before(async () => {
  await navigateTo('/');
});

After(async function(testCase) {
  if (testCase.result.status === Status.FAILED) {
    if (scope.debugOutput.length > 0) {
      this.attach(util.inspect(scope.debugOutput, { colors: true, depth: 3 }));
    }
  }
});
