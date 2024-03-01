const router = require('express').Router();

const CartPage = require('../../components/CartPage');
const OrderCard = require('../../components/OrderCard');
const { Cart, Order_line, Sock, User } = require('../../db/models');

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id, 77777777777);
    let cart, orderLine;
    cart = await Cart.findOne({
      where: { user_id: res.locals.user.id, status: 'не оформлен' },
    });

    if (cart) {
      orderLine = await Order_line.create({
        cart_id: cart.id,
        sock_id: id,
      });
    } else {
      cart = await Cart.create({
        user_id: res.locals.user.id,
        status: 'не оформлен',
      });
      orderLine = await Order_line.create({
        cart_id: cart.id,
        sock_id: id,
      });
    }

    const html = res.renderComponent(CartPage, {
      title: 'Корзина',
      cart,
      user: res.locals.user,
    });
    res.status(201).json({ message: 'success', html });
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
});

router.post('/orders/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id, 666666);
    const orders = await Order_line.findAll({
      where: { cart_id: id },
      include: Sock,
    });
    // console.log(orders, 5555);
    const html = res.renderComponent(OrderCard, { orders }, { doctype: false });
    // console.log(html, 999999);
    if (html) {
      res.status(200).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
