const React = require("react");
const Layout = require("./Layout");

function Error({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="error-page">
        <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
      </div>
    </Layout>
  );
}

module.exports = Error;
