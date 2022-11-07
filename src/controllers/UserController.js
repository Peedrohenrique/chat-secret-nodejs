const userModels = require("../models/UserModel");
module.exports = {
  async craete(req, res) {
    try {
      const { name, message } = req.body;
      const user = await userModels.create({ name, message });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getUsers(req, res) {
    try {
      const users = await userModels.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  // async updateUser(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const { name, message } = req.body;
  //     const user = await userModels.findOne({ where: { id } });
  //     if (!user) {
  //       res.status(401).json({ message: "Nenhum usuario encontrado" });
  //     } else {
  //       const user = await User.update({ name, message }, { where: { id } });
  //       res.status(200).json({ user });
  //     }
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }
  // },
  async delete(req, res) {
    const { id } = req.params;
    const user = await userModels.findOne({ where: { id } });
    if (!user) {
      res.status(401).json({ message: "Usuario não encontrado" });
    } else {
      await userModels.destroy({ where: { id } });
      res.status(200).json("Deletado com sucesso!");
    }
  },
};
