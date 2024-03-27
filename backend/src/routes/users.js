const express = require("express");
const users = express.Router();
const { User } = require("../../db/models");

// USER : /api/users
// ----------------------------------------------------
users.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = users;
