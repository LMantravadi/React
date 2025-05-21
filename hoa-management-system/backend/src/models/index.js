const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

// 1) Create the Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME, // e.g. "postgres"
  process.env.DB_USER, // e.g. "postgres"
  process.env.DB_PASS, // your password
  {
    host: process.env.DB_HOST, // your Supabase host
    port: process.env.DB_PORT || 5432, // should be 5432
    dialect: process.env.DB_DIALECT, // "postgres"
    dialectOptions:
      process.env.DB_SSL === "true"
        ? { ssl: { rejectUnauthorized: false } }
        : {},
    logging: false,
  }
);

// 2) Define models by passing in sequelize & DataTypes
const defineProperty = require("./property");
const Property = defineProperty(sequelize, DataTypes);

// 3) Export sequelize, DataTypes & all models
module.exports = { sequelize, DataTypes, Property };
