const router = require("express").Router();

const SockGenPage = require("../../components/SockGenPage");

const { Sock } = require("../../db/models");

router.get("/", (req, res) => {
  res.send(
    res.renderComponent(SockGenPage, {
      title: "Создать носок",
      sock: { imgSock: "qwewqeqwe" }, //вставить картинку по умолчанию
    })
  );
});

router.get("/select", async (req, res) => {
  try {
    const { color, design, photo } = req.query;
    const sock = await Sock.findOne({ where: { color, design, photo } });
    const document = res.renderComponent(SockGenPage, {
      title: "Создать носок",
      sock,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
});

module.exports = router;
