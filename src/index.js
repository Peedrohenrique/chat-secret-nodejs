require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const conn = require("./config/db");
const User = require("./models/UserModel");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});
// Import Routes
const UserRouter = require("../src/routes/UserRouter");

// Routes
app.use(UserRouter);

const PORT = process.env.DB_PORT || 3000;

conn.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API RODANADO NA PORTA ${PORT}`);
  });
});
