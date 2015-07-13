var express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var moment = require( 'moment' );

var app = express();
var jsonParser = bodyParser.json();

var router = express.Router();

var Issue = require( '../schemas/issue' );

router.get( '/', function( req, res ){

	//get pagination info if it is given and remove it from query object
	var pageSize = req.query.pageSize > 0 ? req.query.pageSize : 10;
	var pageNumber = req.query.pageNumber > 0 ? req.query.pageNumber : 1;
	delete req.query.pageSize;
	delete req.query.pageNumber;

	Issue.findPaginated( req.query, function( err, docs ){
		if (err){
			return res.send(err);
		}

		res.send(docs.documents);
	}, pageSize, pageNumber);
});

router.post( '/', jsonParser, function( req, res ){
	
	var issue = req.body;
	issue.reportedDate = moment().format( 'MM/DD/YYYY hh:mm a' );
	issue.resolvedDate = null;
	var new_doc = new Issue( issue );
	
	Issue.create( new_doc, function( err, doc ){
		if( err ){
			return res.send( err );
		}

		res.send( doc );
	});
});

// PUT issue, updating a current issue
router.put( '/', jsonParser, function( req, res){
	
	var issue = req.body;
	var id = issue._id;
	delete issue._id;

	if( 'open' in issue ){
		if( !issue.open ){
			issue.resolvedDate = moment().format( 'MM/DD/YYYY hh:mm a' );
		}
		else{
			issue.resolvedDate = null;
		}
	}

	var options = { new: true };
	Issue.findByIdAndUpdate(id, issue, options, function( err, doc ){
		if ( err ){
			return res.send( err);
		}
		res.send( doc );
	});
});


module.exports = router;