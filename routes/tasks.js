var frmw = require( '../framework' );
var express = require( 'express' );
var router = express.Router();

/* GET tasks listing. */
router.get( '/', function( req, res ) {
	
	frmw.db.query( "FOR u IN tasks SORT u.timestamp ASC RETURN u", function( err, cursor ) {
		
		if( err ) return res.send( "error" );
		
		res.json( cursor._result )

	});
	
});

router.post( '/', function( req, res ) {
	
	//console.log( req.files );
	
	var newTask = new frmw.task( req.body ).save();
	
	res.redirect( 'back' );
	res.json( newTask );
	
});

router.put( '/', function( req, res ) {
	
	var newTask = new frmw.task( req.body ).update();
	
	res.json( "put" );
	
});

router.delete( '/', function( req, res ) {
	
	console.log( req.body );
	
	frmw.db.tasks.remove( req.body.id )
	
	res.json( "deleted" );
	
});

module.exports = router;