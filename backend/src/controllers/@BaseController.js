const { Base } = require("../../db/models");

class BaseController {
  async findAll(req, res) {
    try {
      const bases = await Base.findAll();
      return res.json(bases);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async findOne(req, res) {
    const uuid = req.params.uuid;
    try {
      const base = await Base.findByPk(req.params.id);
      // const base = await Base.findOne({ where: { uuid } });
      return res.json(base);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async create(req, res) {
    try {
      const base = await Base.create(req.body);
      return res.json(base);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async update(req, res) {
    try {
      const base = await Base.findByPk(req.params.id);
      await base.update(req.body);
      return res.json(base);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async delete(req, res) {
    try {
      const base = await Base.findByPk(req.params.id);
      await base.destroy();
      return res.json({ message: "Base deleted" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

module.exports = new BaseController(); // Instantiate
