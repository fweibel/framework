var frmw = require( '../framework' );
var express = require( 'express' );
var router = express.Router();


/* GET users listing. */
router.get( '/', function( req, res ) {
	
	var data = frmw.db.users;
	res.json( data );
	
});

router.get( '/:userId', function( req, res ) {
	
	var userId = req.params.userId;
	
	res.send( 'user: ' + userId );
	
});

router.get( '/:userId/tasks', function( req, res ) {
	
	res.send( 'tasks listing' );
	
});

router.post( '/:userId/tasks', function( req, res ) {
	
	//console.log( req.files );
	//console.log( req.body );
	
	var newTask = new frmw.task( req.body ).save();
	
	res.redirect('back');
	
});

router.get( '/:userId/tasks/:taskId', function( req, res ) {
	
	var userId = req.params.userId;
	var taskId = req.params.taskId;
	
	res.send( 'taskId: ' + taskId );
	
});

module.exports = router;