const express = require('express');

const app = express();

app.get('/server', function (req, res) {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    res.send('hello world');
})

app.post('/server', function (req, res) {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    res.send('hello world ggg');
})

app.get('/ie', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello world ie')
});

app.all('/json-serve', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'feifei'
    }
    res.send(JSON.stringify(data))
})


app.listen(8000, () => {
    console.log("彭思洁我吃定你了！！！")
})
