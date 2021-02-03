module.exports = {
  isDev: process.env.CONFIG_ENV === 'dev',
  isTest: process.env.CONFIG_ENV === 'test',
  isProd: process.env.CONFIG_ENV === 'prod'
};