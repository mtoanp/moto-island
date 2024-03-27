const { User } = require("../../db/models");

class UserController {
  async findAll(req, res, next) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    const uuid = req.params.uuid;
    try {
      //   const user = await User.findByPk(req.params.id);
      const user = await User.findOne({ where: { uuid } });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const uuid = req.params.uuid;
    try {
      const user = await User.findOne({ where: { uuid } });
      await user.update(req.body);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const uuid = req.params.uuid;
    try {
      const user = await User.findOne({ where: { uuid } });
      await user.destroy();
      return res.json({ message: "User deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController(); // Instantiate
