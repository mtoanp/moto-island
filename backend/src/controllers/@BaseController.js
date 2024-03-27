const { Base } = require("../../db/models");

class BaseController {
  async findAll(req, res, next) {
    try {
      const bases = await Base.findAll();
      return res.json(bases);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    const uuid = req.params.uuid;
    try {
      const base = await Base.findByPk(req.params.id);
      // const base = await Base.findOne({ where: { uuid } });
      return res.json(base);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const base = await Base.create(req.body);
      return res.json(base);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const base = await Base.findByPk(req.params.id);
      await base.update(req.body);
      return res.json(base);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const base = await Base.findByPk(req.params.id);
      await base.destroy();
      return res.json({ message: "Base deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BaseController(); // Instantiate
