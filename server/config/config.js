require('dotenv').config();

const env = process.env.NODE_ENV;

const development = { db: { uri: process.env.DEV_DB } };
const test = { db: { uri: process.env.TEST_DB } };
const production = { db: { uri: process.env.PROD_DB } };

const config = {
  development,
  test,
  production
};

module.exports = config[env];
