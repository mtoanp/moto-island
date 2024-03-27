const { User } = require("../../db/models");

class UserController {
  async findAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new UserController(); // Instantiate
