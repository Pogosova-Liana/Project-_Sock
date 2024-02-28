const router = require("express").Router();
const MainPage = require("../../components/MainPage");

router.get("/", async (req, res) => {
  try {
    res.send(res.renderComponent(MainPage));
  } catch ({ message }) {
    res.send(message);
  }
});
module.exports = router;