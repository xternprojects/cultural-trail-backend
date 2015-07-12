var express = require( 'express' );
var http = require( 'http' );
var mongoose = require( 'mongoose' );
var dotenv = require( 'dotenv' );

var app = express();

dotenv.load(); //load environment variables for local development, heroku variables will be the same

global.db = mongoose.createConnection( process.env.MONGOLAB_URI );

var server = http.createServer( app );

var issueRouter = require( './routers/issueRouter' );

app.use( '/issues', issueRouter );

//process.env.PORT defined by heroku
server.listen( process.env.PORT, function () {
	console.log( 'listening' );
});