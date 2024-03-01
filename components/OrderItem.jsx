const React = require('react');

function OrderItem({ order }) {
  console.log(order, '<-------');
  return (
    <div>
      <img src={order.Sock.imgSock} />
      <h3>{order.Sock.price}</h3>
    </div>
  );
}

module.exports = OrderItem;
