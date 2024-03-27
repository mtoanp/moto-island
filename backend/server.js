const app = require("./src/app");
require("dotenv").config();
const port = process.env.APP_PORT || 3000;

// Create a server
// const { createServer } = require("node:http");
// const server = createServer(app);

// Listen for server events
app
  .listen(port, () => {
    console.log(`Server is listening port ${port} in ${process.env.NODE_ENV}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
