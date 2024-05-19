const { development, production, test } = require("./config.json");

const dev = {
  app: process.env.PORT || 3055,
  db: {
    username: development.username,
    password: development.password,
    database: development.database,
    host: development.host || "localhost",
    dialect: development.dialect || "mysql",
  },
};

module.exports = dev;
