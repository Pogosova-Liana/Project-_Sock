const router = require('express').Router();
const { Sock, Favorite } = require('../../db/models');

const SockImgItem = require('../../components/SockImgItem');

router.post('/', async (req, res) => {
  try {
    const { color, design, photo } = req.body;
    const sock = await Sock.findOne({ where: { color, design, photo } });
    if (sock) {
      const html = res.renderComponent(
        SockImgItem,
        { sock },
        { doctype: false },
      );
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const userId = res.locals.user.id;
    const newFav = await Favorite.create({ user_id: userId, sock_id: id });
    // console.log(newFav);
    if (newFav) {
      res.status(201).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
module.exports = router;
