var express = require( 'express' );
var crypto = require( 'crypto' );

var router = express.Router();

router.get( '/', function( req, res ){
	
	var shasum = crypto.createHash('sha1');
	var timestamp = Math.round((new Date()).getTime() / 1000); //UNIX timestamp
	var params = '';
	
	params += req.query.public_id ? ( 'public_id=' +  req.query.public_id + '&' ) : null;
	params += 'timestamp=' + timestamp + process.env.CLOUDINARY_SECRET;
	shasum.update( params );
	res.send( shasum.digest( 'hex' ) );

});

module.exports = router;