const userModel = require1('../models/user-model.js');
const userService = require1('../services/user-services.js');
const { validationResult } = require('express-validator');

module.exports = createUserController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.createUser(req.body);

        const token = user.generateJWT();

        res.status(201).json({user, token});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}