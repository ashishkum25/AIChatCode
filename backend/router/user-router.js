const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller.js');
const { body } = require('express-validator');


router.post('/register', body('email').isEmail().withMessage('Email must be a valid email address'), 
         body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long'), userController.createUser);


module.exports = router;