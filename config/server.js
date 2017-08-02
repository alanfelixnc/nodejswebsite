var express = require('express');
var app = express();

app.set('view engine', 'ejs'); //sets view engine to EJS
app.set('views', './'); //sets views directory to ./
app.use(express.static('./public')); // sets main directory to ./public
app.set('port', (process.env.PORT || 8081)); //sets default port as 8081 if no other is defined by host

app.listen(app.get('port'), function(){
	console.log("*****************");
	console.log("Modulo: Express")
	console.log("Status: ON");
	console.log("Porta: " +
							app.get('port'));
	console.log("*****************");
	console.log("Servidor ligado! :D");
	console.log("\n");
});

module.exports = app;