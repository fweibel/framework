
var User = function( frmw ) {

var user = function( data ) {
	
	data = data || {};
	
	for( prop in data ) this[prop] = data[prop];
	
	return this;
	
}

user.prototype = {
	
	constructor: user,
	
	log: function() {
		
		console.log( this );
		
		return this;
		
	},
	
}

return user;

}

if( typeof module === "object" ) 
	module.exports = User;
else
	User( frmw );