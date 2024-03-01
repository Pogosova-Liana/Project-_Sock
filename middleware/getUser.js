const { User } = require('../db/models');

// помогает находить пользователя
async function getUser(req, res, next) { // три конструкции это и есть мидл варка через нее все запросы и ответы
  // проверяем наличе пользователя в localstorage
  if (res.locals.user) {
    // находим в базе
    const user = await User.findOne({
      // какой пользователь
      where: { id: res.locals.user.id },
      // какие аттрибуты нужны
      attributes: ['name', 'id', 'role'],
    });

    res.locals.user = user;
  }

  next();
}

module.exports = getUser;