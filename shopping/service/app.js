const express = require('express');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const userApi = require('./api/userApi');
const session = require('express-session');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/api/classify', userApi);
// app.use('/api', userApi)
app.get('/api/all_classify/:id', userApi)
app.get('/api/little_classify/:id', userApi);
app.post('/api/login', userApi);
app.listen(3000);
console.log('success listen at port:3000');