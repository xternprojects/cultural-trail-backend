var express = require( 'express' );
var http = require( 'http' );
var mongoose = require( 'mongoose' );
var cloudinary = require( 'cloudinary' );
var dotenv = require( 'dotenv' );

var app = express();

dotenv.load(); //load environment variables for local development, heroku variables will be the same

global.db = mongoose.createConnection( process.env.MONGOLAB_URI );

cloudinary.config(); //automatically connects to cloudinary through environment variable

var server = http.createServer( app );

var issueRouter = require( './routers/issueRouter' );
var pictureRouter = require( './routers/pictureRouter' );
var formRouter = require( './routers/formRouter' );

app.use( '/issues', issueRouter );
app.use( '/picture', pictureRouter );
app.use( '/formdetails', formRouter );

app.get( '/', function( req, res ){
	res.send( 'Welcome!' );
});

//process.env.PORT defined by heroku
server.listen( process.env.PORT, function () {
	console.log( 'listening' );
});