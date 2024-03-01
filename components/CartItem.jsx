const React = require('react');

function CartItem({ cart }) {
  console.log(cart);
  return (
    <div className='cartItem' data-id={cart.id}>
      <h2>{cart.status}</h2>
      <button className='show-order'>Показать заказы</button>
    </div>
  );
}

module.exports = CartItem;
