const router = require('express').Router();
const CartPage = require('../../components/CartPage');
const { Cart, Order_line, Sock } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: { user_id: res.locals.user.id },
      include: { model: Order_line, include: { model: Sock } },
    });
    // console.log(cart, 11111);
    const html = res.renderComponent(CartPage, {
      title: 'Корзина',
      cart,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
});

module.exports = router;
