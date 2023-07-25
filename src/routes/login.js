const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.login);
router.post('/', loginController.loginValidation);
router.get('/sair', loginController.logout);
module.exports = router;
