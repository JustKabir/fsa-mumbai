const express = require('express');
const router = express.Router();

//Controllers 
const authController = require('../controllers/authController');

// Middlewares
// const {PlayerRegisterValidation,playerLoginValidation} = require('../joiValidation/auth')

// Routes
// Login
router.post('/login', authController.login_post);

// Register
// router.post('/register',PlayerRegisterValidation, authController.register_post);

module.exports = router;
