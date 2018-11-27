const express = require('express');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const userApi = require('./api/userApi');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/classify', userApi);
app.use('/api', userApi)
app.listen(3000);
console.log('success listen at port:3000');