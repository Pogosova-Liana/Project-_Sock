const React = require("react");
const Layout = require("./Layout");

function AuthorizationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="MainPageContainer">
        <h1>Welcome back!</h1>
        <form className="sign-in">
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button className="btn">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;
