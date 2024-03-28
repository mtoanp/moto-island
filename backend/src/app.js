const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const errorMiddleware = require("./middlewares/errorMiddleware");

const corsOptions = {
  origin: [process.env.FRONTEND_URL, "http://localhost:5000"],
  credentials: true, // Allow credentials (including HTTP-only cookies)
};

// Create an Express application
const app = express();
app.use(logger("dev")).use(express.json()).use(cors(corsOptions)); // Parse JSON bodies

// ROUTER
const router = require("./routes/router");
const api = require("./routes/api");
const users = require("./routes/users");
app.use("/", router);
app.use("/api", api); // Use the routes defined in the router file with the /api prefix
app.use("/api/users", users); // Use the routes defined in the router file with the /users prefix

// Set up error-handling middleware
app.use(errorMiddleware);

// Export the Express application
module.exports = app;
