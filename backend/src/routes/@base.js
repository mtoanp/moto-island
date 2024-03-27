// BASE : /api/base
// ----------------------------------------------------

const express = require("express");
const base = express.Router();
const userController = require("../controllers/baseController"); // instantiate
const base = require("../../db/models/base");

base.get("/", userController.findAll);
base.get("/:id", userController.findOne);
base.post("/", userController.create);
base.put("/:id", userController.update);
base.delete("/:id", userController.delete);

module.exports = base;
