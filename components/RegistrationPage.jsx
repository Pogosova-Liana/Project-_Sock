const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title,user}) {
  return (
    <Layout title={title} user={user}>
        <h3>Welcome!</h3>
      <form className='sign-up'>
        <input type='text' name='name' placeholder='name' />
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <input type='password' name='cpassword' placeholder='cpassword' />
        <button>Submit</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;