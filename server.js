var debug = require( 'debug' )( 'my-application' );
var app = require('./app');
var frmw = require('./framework');

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
	debug('Express server listening on port ' + server.address().port);
});

frmw.login( 'fab', 'nope', function( err, req ) {
	
	req.token = Math.random();
	console.log(err);
	console.log(req);

} );