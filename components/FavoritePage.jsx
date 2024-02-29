const React = require('react');
const Layout = require('./Layout');
const FavoriteItem = require('./FavoriteItem');

function FavoritePage({ title, socks, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Избранное:</h2>
      <div className="favoriteList">
        {socks.map((sock) => (
          <FavoriteItem sock={sock} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritePage;
