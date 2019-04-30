const { lookup } = require('dns');

getDockerContainerIp = hostname =>
  new Promise(resolve => {
    lookup(hostname, (err, address) => {
      resolve(address);
    });
  });

module.exports = { getDockerContainerIp };
