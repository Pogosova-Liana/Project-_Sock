const React = require('react');

function SockImgItem({ sock }) {
  return (
    <div className="sock-card" data-id={sock.id}>
      <img src={sock.imgSock} alt="img" className="sock-img" />
      <h3>{sock.price}</h3>
      <button className="to-favorite">В Избранное</button>
      <button className='to-basket'>В корзину</button>
    </div>
  );
}

module.exports = SockImgItem;
