const React = require('react');

function FavoriteItem({ sock }) {
  return (
    <div className="favoriteSockItem" data-id={sock.id}>
      <img src={sock.imgSock} />
      <div className="card-action">
        <button className="btn-cart btn">
          <a href="#">Добавить в корзину</a>
        </button>
        <button className="btn-delete btn">Удалить</button>
        <button className="btn-share btn">Поделиться</button>
      </div>
    </div>
  );
}

module.exports = FavoriteItem;
