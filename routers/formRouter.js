var express = require( 'express' );
var formDetails = require( '../constants/formDetails' );

var router = express.Router();

router.get( '/', function( req, res ){
	res.send( formDetails );
});

module.exports = router;