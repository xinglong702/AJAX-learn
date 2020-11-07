const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('用户数据')
})
app.listen(8888, () => {
    console.log("游菲，做我老婆吧！")
})
