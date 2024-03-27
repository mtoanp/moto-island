const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// Create an Express application
const app = express();
app.use(logger("dev")).use(express.json()); // Parse JSON bodies

module.exports = app;
