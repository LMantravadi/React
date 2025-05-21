// console.log("models export in controller:", require("../models"));
const { Property } = require("../models");

module.exports = {
  async createProperty(req, res) {
    try {
      const newProperty = await Property.create(req.body);
      return res.status(201).json(newProperty);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  },

  async getProperties(req, res) {
    try {
      const list = await Property.findAll();
      return res.json(list);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  },

  async getPropertyById(req, res) {
    try {
      const prop = await Property.findByPk(req.params.id);
      if (!prop) return res.status(404).json({ error: "Not found" });
      return res.json(prop);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  },

  async updateProperty(req, res) {
    try {
      const [updated] = await Property.update(req.body, {
        where: { id: req.params.id },
      });

      if (!updated) return res.status(404).json({ error: "Not found" });

      const prop = await Property.findByPk(req.params.id);
      return res.json(prop);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  },

  async deleteProperty(req, res) {
    try {
      const deleted = await Property.destroy({
        where: { id: req.params.id },
      });

      if (!deleted) return res.status(404).json({ error: "Not found" });
      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  },
};
