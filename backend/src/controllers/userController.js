const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

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
    const userData = req.body;
    userData.password = bcrypt.hashSync(userData.password, 10);

    try {
      const user = await User.create(userData);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const uuid = req.params.uuid;
    const userData = req.body;
    try {
      const user = await User.findOne({ where: { uuid } });
      if (userData.password) {
        userData.password = bcrypt.hashSync(userData.password, 10);
      }
      await user.update(userData);
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
