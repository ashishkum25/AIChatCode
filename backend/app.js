const express = require('express');
const morgan = require('morgan');
const connect = require('./db/db.js');
const cookieParser = require('cookie-parser');

const userRouter = require('./router/user-router.js');

connect();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRouter);

module.exports = app;