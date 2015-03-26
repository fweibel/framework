
var arjs = require( "arangojs" );
var frmw = {};

frmw.users = [];
frmw.user = require( "./user" )( frmw );
frmw.task = require( "./task" )( frmw );
frmw.utils = require( "./utils" )( frmw );

frmw.db = arjs( { url:"http://127.0.0.1:8529", databaseName: "framework" } );
frmw.db.collection( "users", function( err, coll ){
	if( err )
		console.log( "Users collection is unreachable" );
	else
		frmw.db.users = coll;
} );
frmw.db.collection( "tasks", function( err, coll ){
	if( err )
		console.log( "Tasks collection is unreachable" );
	else
		frmw.db.tasks = coll;
} );

frmw.login = function( mail, pass, callback ) {
	
	var vars = { mail: mail, pass: pass };
	var query = "FOR u IN users FILTER u.mail == @mail AND u.pass == @pass RETURN u";
	var error = null, data = null;
	
	frmw.db.query( query, vars, function( err, cursor ) {
		
		if( err ) {
			
			console.log( err );
			error = "BAD_REQUEST";
			
		} else if( cursor._result.length == 0 ) {
			
			error = "AUTH_FAILED";
			
		} else {
			
			data = cursor._result[0];
			data.id = data._key;
			
			delete data["_key"];
			delete data["_id"];
			delete data["_rev"];
			
		}
		
		callback( error, data );
		
	} );
	
};

frmw.join = function( mail, pass, callback ) {
	
	var vars = { mail: mail };
	var query = "FOR u IN users FILTER u.mail == @mail RETURN u";
	var error = null, data = null;
	
	frmw.db.query( query, vars, function( err, cursor ) {
		
		if( err ) { 
			
			error = "BAD_REQUEST";
			console.log(err)
			callback( error, data );
			
		} else if( cursor._result.length > 0 ) {
			
			error = "EMAIL_EXISTS";
			callback( error, data );
			
		} else {
			
			data = { mail: mail, name: mail };
			
			frmw.db.users.save( data, function( err2, doc ) {
				
				data.id = doc._key;
				data.pass = pass;
				console.log( "new:     " + data.name );
				
				callback( error, data );
				
			} );
			
		}
	
	} );
	
};

exports = module.exports = frmw;