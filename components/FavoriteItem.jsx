const React = require("react");

function FavoriteItem({ fav }) {
  return (
    <div className="favoriteSockItem" data-id={fav.id}>
      <img src={fav.Sock.imgSock} className="favImg" />
      <div className="price">{fav.Sock.price}</div>
      <div className="card-action">
        <button className="btn-cart btn">Добавить в корзину</button>
        <button className="btn-delete btn">Удалить</button>
        <button className="btn-share btn">Поделиться</button>
      </div>
    </div>
  );
}

module.exports = FavoriteItem;
