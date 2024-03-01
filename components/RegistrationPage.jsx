const React = require("react");
const Layout = require("./Layout");

function RegistrationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="MainPageContainer">
        <h1>Welcome!</h1>
        <form className="sign-up">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="cpassword" placeholder="cpassword" />
          <button className="btn">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;
