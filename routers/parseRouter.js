var express = require( 'express' );
var log = require('tablog');
var router = express.Router();

router.get('/auth', function( req, res ){
	log.info('ROUTE: GET /parse/auth');
	var auth = {
		'client_key': process.env.PARSE_CLIENT_KEY
		, 'app_id': process.env.PARSE_APP_ID
	};

	res.send( auth );

});

module.exports = router;
