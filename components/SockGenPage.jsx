const React = require("react");
const Layout = require("./Layout");
const FormSock = require("./FormSock");
const SockImgItem = require("./SockImgItem");

function SockGenPage({ title, user, sock }) {
  return (
    <Layout title={title} user={user}>
      <div className="sock-main-container">
        <h1>SockGenPage</h1>
        <FormSock />
        <div className="sock-container">
          <SockImgItem sock={sock} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = SockGenPage;
