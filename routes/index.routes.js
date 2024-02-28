const router = require('express').Router();

const authViewRouter = require('./views/auth.view.routes');
const authApiRouter = require('./api/auth.api.routes')
const MainPage = require("./views/mainPage.views.routes");

router.use('/auth', authViewRouter);
router.use("/", MainPage);
router.use('/api/auth', authApiRouter);

module.exports = router;
