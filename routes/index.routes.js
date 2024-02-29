const router = require("express").Router();

//view
const sockViewRouter = require("./views/sock.view.routes");
const authViewRouter = require("./views/auth.view.routes");
const MainPage = require("./views/mainPage.views.routes");

//api
const authApiRouter = require("./api/auth.api.routes");
const sockApiRouter = require("./api/sock.api.routes");

//view routes
router.use("/sock-generator", sockViewRouter);
router.use("/auth", authViewRouter);
router.use("/", MainPage);

//api routes
router.use("/api/auth", authApiRouter);
router.use("/api/sock-generator", sockApiRouter);

module.exports = router;
