const router = require("express").Router();

//view
const sockViewRouter = require("./views/sock.view.routes");

//api

//view routes
router.use("/sock-generator", sockViewRouter);

//api routes

module.exports = router;
