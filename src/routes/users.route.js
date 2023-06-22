const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/users', userController.all);
router.get('/users/:id', userController.findById);

module.exports = router;