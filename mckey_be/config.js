const config = require("./package.json").projectConfig;

module.exports = {
  mongoConfig: {
    connectionUrl: config.mongoConnectionUrl,
    database: "mckey_db",
    collections: {
      USERS: "users",
      RESTAURANTS: "restaurants",
      CARTS: "carts",
      FOODS: "foods",
      BOOKMARKS: "bookmarks",
    },
  },
  serverConfig: {
    ip: config.serverIp,
    port: config.serverPort,
  },
  tokenSecret: "mckey_secret"
};

