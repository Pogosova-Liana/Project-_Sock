const router = require("express").Router();

const SockGenPage = require("../../components/SockGenPage");

router.get("/", (req, res) => {
  res.send(res.renderComponent(SockGenPage, { title: "Создать носок" }));
});

module.exports = router;
