const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userScheam = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLenght: 6,
        maxLenght: 50
    },
    password: {
        type: String,
        select: false,
    }
});

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateJWT = function () {
    return jwt.sign(
        { email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

module.exports = mongoose.model('user', userSchema);
