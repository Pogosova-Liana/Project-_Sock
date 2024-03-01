const React = require("react");
const Layout = require("./Layout");
function MainPage({ user }) {
  return (
    <Layout user={user}>
      <div className="MainPageContainer">
        <h1>MainPage</h1>
        <h2>
          Привет друг!Ты попал в наше приложение по генерации и продаже носков.{" "}
        </h2>
        <button className="btn_start btn">
          Кнопка для переноса в наш волшебный генератор
        </button>
      </div>
    </Layout>
  );
}
module.exports = MainPage;
