const AuthorizationPage = require('../../components/AuthorizationPage');
const RegistrationPage = require('../../components/RegistrationPage');

const router = require('express').Router();
// страница регистрация
router.get('/registration', async (req, res) => {
  try {
    const html = res.renderComponent(RegistrationPage, { title: 'reg' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

//страница авторизации
router.get('/authorization', async (req, res) => {
  try {
    const html = res.renderComponent(AuthorizationPage, { title: 'auth' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;