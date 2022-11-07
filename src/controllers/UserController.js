const User = require("../models/UserModel");
module.exports = {
  async craete(req, res) {
    try {
      const { name, message } = req.body;
      const user = await User.create({ name, message });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, message } = req.body;
      const user = await User.findOne({ where: { id } });
      if (!user) {
        res.status(401).json({ message: "Nenhum usuario encontrado" });
      } else {
        const user = await User.update({ name, message }, { where: { id } });
        res.status(200).json({ user });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(401).json({ message: "Usuario não encontrado" });
    } else {
      await User.destroy({ where: { id } });
      res.status(200).json("Deletado com sucesso!");
    }
  },
};
