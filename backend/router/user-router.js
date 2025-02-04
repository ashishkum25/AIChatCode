const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller.js');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware.js');

router.post('/register',
        body('email').isEmail().withMessage('Email must be a valid email address'), 
        body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long'),
        userController.createUser);

router.post('/login',
        body('email').isEmail().withMessage('Email must be a valid email address'),
        body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
        userController.loginController);
        
router.get('/profile', authMiddleware.authUser, userController.profileController);

router.get('/logout', authMiddleware.authUser, userController.logoutController);

module.exports = router;