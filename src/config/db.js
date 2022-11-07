const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

try {
  console.log("Conectado com sucesso");
} catch (error) {
  console.log("Não foi possível conectar" + error);
}

module.exports = sequelize;
