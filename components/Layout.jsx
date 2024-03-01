const React = require('react');
const Navbar = require('./Navbar');
const Footer = require('./Footer');
function Layout({ title, children, user }) {
  return (
    <html lang='ru'>
      <head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/btn.css" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/sock.js" />
        <script defer src='/scripts/cart.js' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

module.exports = Layout;
