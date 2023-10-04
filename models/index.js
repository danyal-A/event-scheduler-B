const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Events = require("./Event")(sequelize, DataTypes);

try {
  sequelize.authenticate();
  sequelize.sync({ force: false });
  // sequelize.sync({ force: true });
  console.log("My SQL Connected!");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = db;
