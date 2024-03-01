const React = require('react');

function FavoriteItem({ fav }) {
  return (
    
    <div className="favoriteSockItem" data-id={fav.id}>
      <img src={fav.Sock.imgSock} alt='111111'/>
      <div className='price'>{fav.Sock.price}</div>
      <div className="card-action">
        <button className="btn-cart">
          <a href="#">Добавить в корзину</a>
        </button>
        <button className="btn-delete">Удалить</button>
        <button className="btn-share">Поделиться</button>
      </div>
    </div>
  );
}

module.exports = FavoriteItem;
