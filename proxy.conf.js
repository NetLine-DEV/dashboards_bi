const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://172.16.2.102:60012/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
];

module.exports = PROXY_CONFIG;