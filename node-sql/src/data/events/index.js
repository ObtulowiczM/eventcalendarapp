"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("events");

  const getEvents = async (userId) => {
    const connection = await getConnection();
    const request = await connection.request();
    request.input("userId", sql.VarChar(50), userId);
    return request.query(sqlQueries.getEvents);
  };

  return {
    getEvents,
  };
};

module.exports = { register };
