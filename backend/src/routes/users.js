// USER : /api/users
// ----------------------------------------------------

const express = require("express");
const users = express.Router();
const userController = require("../controllers/UserController"); // instantiate

users.get("/", userController.findAll);
users.get("/:uuid", userController.findOne);
users.post("/", userController.create);
users.put("/:uuid", userController.update);
users.delete("/:uuid", userController.delete);

module.exports = users;
