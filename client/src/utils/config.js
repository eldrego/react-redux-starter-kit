const env = process.env.NODE_ENV; // 'dev' or 'test' or 'prod'

const development = { api: { uri: process.env.API_DEV } };
const test = { api: { uri: process.env.API_TEST } };
const production = { api: { uri: process.env.API_PROD } };

const config = {
  development,
  test,
  production
};

module.exports = config[env];
