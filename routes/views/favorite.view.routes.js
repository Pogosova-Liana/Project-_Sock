const router = require('express').Router();
const { Favorite, Sock } = require('../../db/models');
const FavoritePage = require('../../components/FavoritePage');

router.get('/', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const socks = await Favorite.findAll({ where: { user_id: id }, include: Sock });
    res.send(res.renderComponent(FavoritePage, { title: 'Избранные товары', socks }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router; // подтянуть в роутер главный
