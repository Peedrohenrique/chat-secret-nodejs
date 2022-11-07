const { DataTypes } = require("sequelize");
const conn = require("../config/db");

const userModels = conn.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = userModels;
