// USER : /api/users
// ----------------------------------------------------

const express = require("express");
const users = express.Router();
const userController = require("../controllers/userController"); // instantiate

users.get("/", userController.findAll);

module.exports = users;
