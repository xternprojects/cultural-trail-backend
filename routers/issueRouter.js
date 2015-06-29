var express = require( 'express' );
var mongoose = require( 'mongoose' );

var router = express.Router();

var Issue = require( '../schemas/issue' );

router.get( '/', function( req, res ){
	console.log( req.query );
	Issue.find( req.query, function (err, docs) {
    	if (err){
			return next(err);
    	}

    	res.send(docs);
  	});
});

router.post( '/', function( req, res ){
	res.send( 'You sent a POST request to the server' );
});

module.exports = router;