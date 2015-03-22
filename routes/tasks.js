var frmw = require( '../framework' );
var express = require( 'express' );
var router = express.Router();

/* GET users listing. */
router.get( '/', function( req, res ) {
	
	frmw.db.query( "FOR u IN tasks RETURN u", function( err, cursor ) {
		
		if( err ) return res.render( "error.html" );
		
		
		
		res.json( cursor._result )

	});
	
});

router.post( '/', function( req, res ) {
	
	//console.log( req.files );
	//console.log( req.body );
	
	var newTask = new frmw.task( req.body ).save();
	
	res.redirect( 'back' );
	
});

router.delete( '/', function( req, res ) {
	
	console.log( req.body );
	
	frmw.db.tasks.remove( req.body.id )
	
	res.json( "deleted" );
	
});

module.exports = router;