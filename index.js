var express = require('express');
var app = express();

app.get('/', (req, res) => {
	var phrase = require('./citations.json');
	res.render('citation.ejs', {phrase: phrase});
});

app.get('/home', (req, res) => {
	var phrase = require('./citations.json');
	res.render('citation.ejs', {phrase: phrase});
});

app.get('/contact', (req, res) => {
	res.render('./contact.ejs');
});

app.get('/ajout', (req, res) => {
	var phrase = require('./citations.json');
	res.render('./ajout.ejs', {phrase: phrase});
});



app.use((req, res, next) => {
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Erreur 404: \n\n\t Vous ne trouverez pas de citations ici');
});

app.listen(8080);