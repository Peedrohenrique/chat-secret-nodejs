const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/get", UserController.getUsers);
router.post("/post", UserController.craete);
router.delete("/delete/:id", UserController.delete);

module.exports = router;
