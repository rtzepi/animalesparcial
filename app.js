const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Animales'
    });
});

app.get('/golden', (req, res) => {
    res.render('golden', {
        nombre: 'Animales'
    });
});

app.get('/pastor', (req, res) => {
    res.render('pastor', {
        nombre: 'Pastor Alemán'
    });
});

app.get('/pequines', (req, res) => {
    res.render('pequines', {
        nombre: 'Pequinés'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
