const router = require('express').Router();
const { Sock } = require('../../db/models');
const FavoritePage = require('../../components/FavoritePage');

router.get('/', async (req, res) => {
  try {
    res.send(res.renderComponent(FavoritePage, { title: 'Избранные товары', Sock }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router; // подтянуть в роутер главный
