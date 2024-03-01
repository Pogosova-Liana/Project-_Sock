const React = require("react");
const Layout = require("./Layout");
const FavoriteItem = require("./FavoriteItem");

function FavoritePage({ title, socks, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="FavContainer">
        <h2>Избранное:</h2>
        <div className="favoriteList">
          {socks.map((sock) => (
            <FavoriteItem fav={sock} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;
