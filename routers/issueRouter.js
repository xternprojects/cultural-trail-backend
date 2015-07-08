var express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var multer = require( 'multer' );
var moment = require( 'moment' );

var app = express();
var jsonParser = bodyParser.json();

var router = express.Router();

var Issue = require( '../schemas/issue' );

router.get( '/', function( req, res ){
	console.log( req.query );
	Issue.find( req.query, function( err, docs ){
		if (err){
			return res.send(err);
		}

		res.send(docs);
	});
});

router.post( '/', jsonParser, function( req, res ){
	var issue = req.body;
	issue.reportedDate = moment().format( 'MM-DD-YYYY hh:mm a');
	issue.resolvedDate = null;
	var new_doc = new Issue( issue );
	Issue.create( new_doc, function( err, doc ){
		if( err ){
			return res.send( err );
		}

		res.send( doc );
	});
});

module.exports = router;