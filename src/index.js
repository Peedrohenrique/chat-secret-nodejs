require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const conn = require("./config/db");
const User = require("./models/UserModel");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

// Import Routes
const UserRouter = require("../src/routes/UserRouter");

// Routes
app.use(UserRouter);

const port = process.env.PORT || 3000;

// conn.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`API RODANADO NA PORTA ${PORT}`);
//   });
// });

app.listen(port, () => {
  console.log(`Servidor está funcionado na porta: ${port}`);
});
