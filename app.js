const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));


app.get('/hello', (req, res) => {
    res.json({
        msg: 'Hello world'
    });
});

app.get('/echo/:id', (req, res) => {
    res.json({
        id: req.params.id
    })
})

app.post('/sum', (req, res) => {
    const numbers = req.body.numbers;
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({
        sum: sum
    });
});

let list = [];

app.post('/list', (req, res) => {
    list.push(req.body.text);
    res.json({
        list: list
    });
});

app.listen(3000, () => console.log('listening at http://localhost:3000'));
