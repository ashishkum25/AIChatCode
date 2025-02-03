const userModel = require('../models/user-model.js');

module.exports = createUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({ email: email, password: hashedPassword });

    return user;
}