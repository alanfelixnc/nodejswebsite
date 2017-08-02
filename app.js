var app = require('./config/server');

app.get('/*', function(req, res) {
	var bgsort = Math.floor(Math.random() * (6 - 1)) + 1;
	
	res.render('index', {bgnum: bgsort});
});

app.post('/about', function(req, res) {
	res.render('about');
});

app.post('/contact', function(req, res) {
	res.render('contact');
});

app.post('/gallery', function(req, res) {
	res.render('gallery');
});

app.post('/projects', function(req, res) {
	res.render('projects');
});