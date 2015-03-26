
var Task = function( frmw ) {

var task = function( data ) {
	
	data = data || {};
	
	this.title = "";
	this.description = "";
	this.status = "TODO";
	this.timestamp = frmw.utils.now();
	
	for( prop in data ) this[prop] = data[prop];
	
	return this;
	
}

task.prototype = {
	
	constructor: task,
	
	save: function() {
		
		if( this.title == "" && this.description == "" ) return this;
		
		this.timestamp = frmw.utils.now();
		
		frmw.db.tasks.save( this, function( err, doc ) {
			
			this.id = doc._key;
			
		} );
		
		return this;
		
	},
	
	update: function() {
		
		if( this._key == undefined) return this;
		
		this.lastmodified = frmw.utils.now();
		
		frmw.db.tasks.update( this._key, this, function( err, doc ) {
			
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