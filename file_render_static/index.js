const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('assets'));


app.use(express.static('files'));


app.use('/virtual', express.static(path.join(__dirname, 'image')));


app.get('/',function (req,res) {
    res.send("hello-node")
});


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});