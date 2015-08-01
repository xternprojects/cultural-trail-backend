var express = require( 'express' );
var http = require( 'http' );
var mongoose = require( 'mongoose' );
var cloudinary = require( 'cloudinary' );
var log = require('tablog');
var dotenv = require( 'dotenv' );

var app = express();

dotenv.load(); //load environment variables for local development, heroku variables will be the same

global.db = mongoose.createConnection( process.env.MONGOLAB_URI );

cloudinary.config(); //automatically connects to cloudinary through environment variable

var server = http.createServer( app );

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://xternprojects.gihub.io");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

var issueRouter = require( './routers/issueRouter' );
var pictureRouter = require( './routers/pictureRouter' );
var parseRouter = require( './routers/parseRouter' );
var formRouter = require( './routers/formRouter' );

app.use( '/issues', issueRouter );
app.use( '/picture', pictureRouter );
app.use( '/parse', parseRouter );
app.use( '/formdetails', formRouter );

app.get( '/', function( req, res ){
	res.send( 'Welcome!' );
});

//process.env.PORT defined by heroku
server.listen( process.env.PORT, function () {
	log.info('Server started on port ' + process.env.PORT);
});
