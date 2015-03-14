var express = require( 'express' );
var router = express.Router();

/* GET users listing. */
router.get( '/', function( req, res ) {
	
	res.send( 'user listing' );
	
});

router.get( '/:id', function( req, res ) {
	
	var id = req.params.id;
	res.send( 'user listing' + id );
	
});

module.exports = router;