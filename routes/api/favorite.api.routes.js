const router = require("express").Router();
const { Favorite } = require("../../db/models"); // чтобы обратится к базе не забываем подключить модель нужную
// в роутеры подтягиваем компоненты с кем работаем

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Favorite.destroy({ where: { id } });
    if (result) {
      res.json({ message: "success" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
