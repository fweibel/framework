
var Task = function( frmw ) {

var task = function( data ) {
	
	data = data || {};
	
	for( prop in data ) this[prop] = data[prop];
	
	return this;
	
}

task.prototype = {
	
	constructor: task,
	
	save: function() {
		
		console.log( this );
		
		return this;
		
	},
	
}

return task;

}

if( typeof module === "object" ) 
	module.exports = Task;
else
	Task( frmw );