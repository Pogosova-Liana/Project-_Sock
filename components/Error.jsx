const React = require("react");
const Layout = require("./Layout");

function Error({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="error-page">
        <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
        {/*<img
          src="https://www.rush-analytics.ru/wp-content/uploads/2022/01/vse-nachinaetsya-s-idei.-63.png"
          alt="404"
          id="err"
        />*/}
      </div>
    </Layout>
  );
}

module.exports = Error;
