
var Utils = function( frmw ) {

var utils = {}

utils.now = function() {
	
	return new Date().getTime();
	
}

return utils;

}

if( typeof module === "object" ) 
	module.exports = Utils;
else
	Utils( frmw );