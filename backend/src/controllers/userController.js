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

  async findOne(req, res) {
    const uuid = req.params.uuid;
    try {
      //   const user = await User.findByPk(req.params.id);
      const user = await User.findOne({ where: { uuid } });
      return res.json(user);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async update(req, res) {
    const uuid = req.params.uuid;
    try {
      const user = await User.findOne({ where: { uuid } });
      await user.update(req.body);
      return res.json(user);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async delete(req, res) {
    const uuid = req.params.uuid;
    try {
      const user = await User.findOne({ where: { uuid } });
      await user.destroy();
      return res.json({ message: "User deleted" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new UserController(); // Instantiate
