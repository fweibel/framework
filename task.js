
var Task = function( frmw ) {

var task = function( data ) {
	
	data = data || {};
	
	for( prop in data ) this[prop] = data[prop];
	
	return this;
	
}

task.prototype = {
	
	constructor: task,
	
	save: function() {
		
		if( this.title == "" && this.description == "" ) return this;
		
		frmw.db.tasks.save( this, function( err, doc ) {
			
			this.id = doc._key;
			
		} );
		
		return this;
		
	},
	
}

return task;

}

if( typeof module === "object" ) 
	module.exports = Task;
else
	Task( frmw );