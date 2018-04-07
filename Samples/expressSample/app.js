const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hello from express');
});

app.listen(3000, () => {
    console.log('Listening');
});