const React = require('react');


function SockImgItem({ sock }) {
  return (
   <div className='sock-card'>
    <img src={sock.imgSock} alt="img" />
    <h3>{sock.price}</h3>
    <a href="/">В Избранное</a>
    <a href="/">В Корзину</a>
    </div>
  );
}

module.exports = SockImgItem;