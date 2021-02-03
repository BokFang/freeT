const path = require('path');
const env = require('./env');
const devConfigs = require('./env/dev');
const testConfigs = require('./env/test');
const prodConfigs = require('./env/prod');

const srcPath = path.resolve(__dirname, '../src');

let envConfigs = {};

if (env.isDev) {
  envConfigs = devConfigs;
} else if (env.isTest) {
  envConfigs = testConfigs;
} else if (env.isProd) {
  envConfigs = prodConfigs;
}

module.exports = {
  srcPath,
  ...envConfigs
}