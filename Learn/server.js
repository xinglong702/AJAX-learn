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
    res.send('hello world ie 2')
});

app.get('/timeout', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('hello world timeout')
    }, 3000)
});

app.get('/cancel', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('hello world cancel')
    }, 3000)

});

app.get('/repeat', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('hello world repeat')
    }, 3000)

});

app.all('/json-serve', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'feifei'
    }
    res.send(JSON.stringify(data)) // send（）函数只能传入字符串和buffer,所以需要转字符串
})

//jQuery 服务
app.all('/jquery-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'feifei'
    }
    res.send(JSON.stringify(data))
});

//axios 服务
app.all('/axios-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'feifei'
    }
    res.send(JSON.stringify(data))
});

//fetch 服务
app.all('/fetch-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'feifei'
    }
    res.send(JSON.stringify(data))
});

//jsonp 服务
app.get('/jsonp-server', (req, res) => {
    const data = {
        name: 'feifei'
    }
    res.end(`handle(${JSON.stringify(data)})`)
})

// 用户名检查是否存在
app.get('/check-username', (req, res) => {
    const data = {
        exist: 1,
        msg: '用户已经存在！！！'
    }
    res.end(`handle(${JSON.stringify(data)})`)
})

app.listen(8000, () => {
    console.log("彭思洁我吃定你了！！！")
})
