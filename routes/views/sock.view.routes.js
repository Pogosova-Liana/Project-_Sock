const router = require('express').Router();

const SockGenPage = require('../../components/SockGenPage');

const { Sock } = require('../../db/models');

router.get('/', (req, res) => {
  res.send(
    res.renderComponent(SockGenPage, {
      title: 'Создать носок',
      sock: { imgSock: 'qwewqeqwe' }, // вставить картинку по умолчанию
    }),
  );
});

module.exports = router;
