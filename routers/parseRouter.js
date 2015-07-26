var express = require( 'express' );

var router = express.Router();

router.get('/auth', function( req, res ){

	var auth = {
		'client_key': process.env.PARSE_CLIENT
		, 'app_id': process.env.PARSE_APP_ID
	};

	res.send( auth );

});

module.exports = router;