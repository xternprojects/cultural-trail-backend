var should = require( 'should' ); 
var assert = require( 'assert' );
var request = require( 'supertest' );
var moment = require ( 'moment' );
var mongoose = require( 'mongoose' );
var dotenv = require( 'dontenv' );
var cloudinary = require( 'cloudinary' );
var Issue = require ( '../schemas/issue' );

//load environment variables for local development, heroku variables will be the same
dotenv.load();

// fire up MongoDB connection
global.db = mongoose.createConnection( process.env.MONGOLAB_URI );

//automatically connects to cloudinary through environment variable
cloudinary.config(); 

// Issues test suite
describe('Issues', function() {
	
	describe('Issues Schemas', function() {
	var issue;
	before(function(done) {
		issue = new Issue()
		});
	});
});

