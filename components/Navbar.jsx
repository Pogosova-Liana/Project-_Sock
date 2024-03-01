const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
          <div>
            Logo
          </div>
        </li>
        <li>
          <a href="/" className="navbar">Main</a>
        </li>
        <li>
          <a href="/favorites" className="navbar">Favorites</a>
        </li>
        <li>
          <a href="/cart" className="navbar">Cart</a>
        </li>
        {user ? (
          <>
            <li>
              <a>{user.name}</a>
            </li>
            <li>
              <a href="/api/auth/logout">logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/auth/registration">sign-up</a>
            </li>
            <li>
              <a href="/auth/authorization">sign-in</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
