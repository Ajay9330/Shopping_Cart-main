const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + "/pages/index.html")) 
})

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/pages/login.html'))
})

app.get('/signup', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/pages/SignUp.html'))
})

app.get('/cart', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/pages/cart.html'))
})

app.get('/checkout', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/pages/checkout.html'))
})

app.listen(3000, ()=>{console.log('The server is working on localhost:3000')})