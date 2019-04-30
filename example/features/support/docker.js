const { lookup } = require('dns');

const getDockerContainerIp = hostname =>
  new Promise(resolve => {
    lookup(hostname, (err, address) => {
      resolve(address);
    });
  });

module.exports = { getDockerContainerIp };
