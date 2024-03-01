const React = require('react');
const OrderItem = require('./OrderItem');

function OrderCard({ orders }) {
  return (
    <div className='orderCartItem'>
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  );
}

module.exports = OrderCard;
