const React = require("react");
const Navbar = require("./Navbar");
const Footer=require('./Footer')
function Layout({ title, children, user }) {
    return (
      <html lang="ru">
        <head>
          <title>{title}</title> 
          <script defer src='/scripts/auth.js' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <Navbar user={user} />
          {children}
          <Footer/>
        </body>
      </html>
    );
  }
  
  module.exports = Layout;
  