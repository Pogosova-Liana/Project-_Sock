const React = require('react');
const Layout = require('./Layout');
const CartItem = require('./CartItem');

function CartPage({ title, cart, user }) {
  // console.log(cart);
  return (
    <Layout title={title} user={user}>
      <h2>Корзина</h2>
      <CartItem cart={cart}/>
    </Layout>
  );
}

module.exports = CartPage;
