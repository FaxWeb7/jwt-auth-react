const UserController = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);
router.post('/logout', UserController.Logout);
router.get('/activate/:link', UserController.Activate);
router.get('/refresh', UserController.Refresh);
router.get('/users', UserController.getUsers);

module.exports = router;


