const React = require('react');

function FavoriteItem({ sock }) {
  return (
    <div className="favoriteSockItem" data-id={sock.id}>
      <img src={sock.imgSock} />
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
