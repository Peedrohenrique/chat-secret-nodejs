const { DataTypes } = require("sequelize");
const conn = require("../config/db");

const User = conn.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
