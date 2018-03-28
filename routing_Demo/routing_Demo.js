const express = require('express');
const app = express();


app.get('/', function (req,res) {
    res.send('GET request')
});


app.get('/ab?cd', function (req,res) {
    res.send('pattern match with ab?cd')
});

app.get('/ab+c+d', function (req,res) {
    res.send('pattern match with ab+cd')
});

app.get(/.ut$/,function (req,res) {
    res.send('pattern match with .*ut')
});

app.get('/users/:mansi/age/:age' ,function (req,res) {
    res.send(req.params);
});


app.route('/mansi')
    .get(function (req,res) {
        res.send('GET request by mansi')
    })
.post(function (req,res) {
    res.send('POST request by mansi')
});

app.listen(4000 , function () {
   console.log('server start at port 4000')
});