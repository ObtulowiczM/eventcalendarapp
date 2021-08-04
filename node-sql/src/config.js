"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
  SQL_ECRYPT,
  OCTA_ORG_URL,
  OCTA_CLIENT_ID,
  OCTA_CLIENT_SECRET,
} = process.env;

const sqlEncrypt = process.env.SQL_ECRYPT == "true";

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  cookiePWD: COOKIE_ENCRYPT_PWD,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    option: {
      encrypt: SQL_ECRYPT,
      enableArithAbort: true,
    },
  },
  okta: {
    url: OCTA_ORG_URL,
    clientId: OCTA_CLIENT_ID,
    clientSecret: OCTA_CLIENT_SECRET,
  },
};
