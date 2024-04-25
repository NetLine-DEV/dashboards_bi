const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://relatorios.netlinetelecom.com.br:60012',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
];

module.exports = PROXY_CONFIG;