const { body, validationResult } = require("express-validator");

// Middleware d'échappement des valeurs pour les requêtes SQL
const validateInputs = (req, res, next) => {
  console.log("validateInputs", req.body);
  // This part of the code checks if each value is a string
  for (let key in req.body) {
    if (typeof req.body[key] !== "string") {
      return res.status(400).json({ error: `${key} must be a string` });
    }
  }

  // Escape all values in req.body using sqlstring.escape()
  for (let key in req.body) {
    // Remove SQL special characters using a single replace call
    req.body[key] = req.body[key].replace(
      /[\0\x08\x09\x1a\n\r"'\\]|['",;]/g,
      ""
    );
  }

  // Vérifier les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = validateInputs;
