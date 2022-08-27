const express = require("express")
const controller = require("../controllers/controllers");

const routes = express.Router();

routes.post("/create", controller.create);
routes.post("/update", controller.update);
routes.post("/remove", controller.remove);
routes.get("/view", controller.view);

module.exports = routes;
