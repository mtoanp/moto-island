const express = require("express");
const router = express.Router();

// ROUTER : /
// ----------------------------------------------------
router.get("/", (req, res) => {
  res.json(
    `Hello👋, your router run on port ${process.env.APP_PORT} in ${process.env.NODE_ENV} mode`
  );
});

module.exports = router;
