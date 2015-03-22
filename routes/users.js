var frmw = require( '../framework' );
var express = require( 'express' );
var router = express.Router();


/* GET users listing. */
router.get( '/', function( req, res ) {
	
	var data = frmw.db.users;
	res.json( data );
	
});

router.post( '/', function( req, res ) {
	
	//console.log( req.files );
	//console.log( req.body );
	
	var newTask = new frmw.task( req.body ).save();
	
	res.redirect('back');
	
});

module.exports = router;