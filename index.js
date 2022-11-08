require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const conn = require("./src/config/db");
const User = require("./src/models/UserModel");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,"
  );
  app.use(cors());
  next();
});

// Import Routes
const UserRouter = require("./src/routes/UserRouter");

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
