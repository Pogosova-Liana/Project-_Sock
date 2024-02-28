const router = require("express").Router();

//view
const sockViewRouter = require("./views/sock.view.routes");

//api

//view routes
router.use("/sock-generator", sockViewRouter);

//api routes

const authViewRouter = require('./views/auth.view.routes');
const authApiRouter = require('./api/auth.api.routes')
const MainPage = require("./views/mainPage.views.routes");

router.use('/auth', authViewRouter);
router.use("/", MainPage);
router.use('/api/auth', authApiRouter);

module.exports = router;
