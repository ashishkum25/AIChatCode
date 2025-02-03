const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Successfully connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB', error.message);
        });
};

module.exports = connect;