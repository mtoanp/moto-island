const app = require("./src/app");
const { sequelize } = require("./db/models");
require("dotenv").config();
const port = process.env.APP_PORT || 3000;

// Create a server
// const { createServer } = require("node:http");
// const server = createServer(app);

// Listen for server events
app
  .listen(port, async () => {
    console.log(`Server is listening port ${port} in ${process.env.NODE_ENV}`);
    await sequelize.authenticate();
    console.log("Database connection successful !");
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
