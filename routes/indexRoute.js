const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getIndex);
indexRouter.post("/new", indexController.postNewMessage);

module.exports = indexRouter;