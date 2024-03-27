const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// Create an Express application
const app = express();
app.use(logger("dev")).use(express.json()); // Parse JSON bodies

// ROUTER
const router = require("./routes/router");
const api = require("./routes/api");
const users = require("./routes/users");
app.use("/", router);
app.use("/api", api); // Use the routes defined in the router file with the /api prefix
app.use("/api/users", users); // Use the routes defined in the router file with the /users prefix

// Export the Express application
module.exports = app;
