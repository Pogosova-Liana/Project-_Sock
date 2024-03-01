const React = require("react");
const Layout = require("./Layout");
const FormSock = require("./FormSock");
const SockImgItem = require("./SockImgItem");

function SockGenPage({ title, user, sock }) {
  return (
    <Layout title={title} user={user}>
      <div className="sock-page-container">
        <h1>SockGenPage</h1>
        <div className="sock-main-container">
          <FormSock />
          <div className="sock-container">
            <SockImgItem sock={sock} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = SockGenPage;
