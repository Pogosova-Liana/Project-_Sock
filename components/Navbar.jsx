const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
            <img src="https://cdn-icons-png.flaticon.com/512/6779/6779375.png" className="logo" height={30}/>
        </li>
        <li>
          <a href="/" className="navbar">Main</a>
        </li>
        
          {user ? (
            <><li>
          <a href="/favorites" className="navbar">Favorites</a>
        </li>
        <li>
          <a href="/cart" className="navbar">Cart</a>
        </li>
              <li>
                <a className="navbar">{user.name}</a>
              </li>
              <li>
                <a href='/api/auth/logout' className="navbar">logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='/auth/registration' className="navbar">sign-up</a>
              </li>
              <li>
                <a href='/auth/authorization' className="navbar">sign-in</a>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
