const React = require("react");
const Layout = require("./Layout");
const FormSock = require("./FormSock");

function SockGenPage({ title, user, sock }) {
  return (
    <Layout title={title} user={user}>
      <div className="sock-main-container">
        <h1>SockGenPage</h1>
        <FormSock />
        <img src={sock.imgSock} />
      </div>
      <a href="/">В Избраное</a>
      <a href="/">В Корзину</a>
    </Layout>
  );
}

module.exports = SockGenPage;
