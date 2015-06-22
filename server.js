var express = require( 'express' );
var http = require( 'http' );

var app = express();

var PORT = 3000;

var server = http.createServer( app );

var mainRouter = require( './routers/mainRouter' );

app.use( '/main', mainRouter );

//process.env.PORT defined by heroku
server.listen( process.env.PORT || PORT, function () {
	console.log( 'listening' );
});