const express = require('express');
const app = express();
const { login, SignUp } = require('../controller/auth.controller');

app.post('/login', login);
app.post('/signup', SignUp);

module.exports = app;
