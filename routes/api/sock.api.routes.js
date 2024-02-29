const router = require("express").Router();
const { Sock } = require("../../db/models");

const SockImgItem = require("../../components/SockImgItem");

router.post("/", async (req, res) => {
  try {
    const { color, design, photo } = req.body;
    const sock = await Sock.findOne({ where: { color, design, photo } });
    if (sock) {
      const html = res.renderComponent(
        SockImgItem,
        { sock },
        { doctype: false }
      );
      res.status(201).json({ message: "success", html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
