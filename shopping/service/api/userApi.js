const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'llf12345',
    database: 'vue-shopping'
});

connection.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret == 'undefined') {
        res.json('err');
    } else {
        res.json(ret);
    }
}

router.get('/api/classify', (req, res) => {
    let sql = $sql.classify.select_name;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
            jsonWrite(res, result);
        }
    })
});
module.exports = router;