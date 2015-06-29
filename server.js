var express = require( 'express' );
var http = require( 'http' );
var mongoose = require( 'mongoose' );

var app = express();

var PORT = 3000;

global.db = mongoose.createConnection( 'mongodb://xtern:2015@ds035280.mongolab.com:35280/heroku_btspb3kw' );

var server = http.createServer( app );

var mainRouter = require( './routers/mainRouter' );
var issueRouter = require( './routers/issueRouter' );

app.get( '/', function( req, res ) {
	res.send( 'Welcome!' );
});

app.use( '/main', mainRouter );
app.use( '/issues', issueRouter );

//process.env.PORT defined by heroku
server.listen( process.env.PORT || PORT, function () {
	console.log( 'listening' );
});