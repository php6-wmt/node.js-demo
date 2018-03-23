const express= require('express');
const app = express()
app.get('/', function (req,res) {
    res.send("hello-node")
});
app.post('/post',function (req,res) {
    res.send("post request")
});


app.listen(3000 , function () {
console.log('server start')
})