const express = require('express');
const http = require('http');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const userApi = require('./api/userApi');
const session = require('express-session');
const ws = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
    }, // 1h
}));
app.use('/api', (req, res, next) => {
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Origin', 'http://192.168.1.109:8080');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTION');
        next();
    })
    // app.use('*', function(req, res, next) {
    //     if (req.session.login) next() // ??session????????
    //     else {
    //         res.redirect('/login')
    //     }
    // })
app.get('/api/classify', userApi);
// app.use('/api', userApi)
app.get('/api/all_classify/:id', userApi)
app.get('/api/little_classify/:id', userApi);
app.post('/api/login', userApi);

console.log('success listen at port:3000');

wss.on('connection', (ws) => {
    ws.on('message', function incoming(data) {
        // ws.send(data);
        console.log(data);
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    })
})
server.listen(3000);