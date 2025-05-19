const express = require('express');
const UserController = require("../controllers/userController");

const userController = new UserController();

const router = express.Router();
router.get("/:shortId", userController.index);
router.post("/shorten", userController.create);

module.exports = router;
