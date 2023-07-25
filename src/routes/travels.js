const express = require('express');
const router = express.Router();

const userLogged = require('../middlewares/authlog');
const loginController = require('../controllers/loginController');

router.get('/', userLogged, loginController.mytravels);


module.exports = router;