/**
 * Global vars for javascript files
 */

var JQUERY_VERSION = '1.8.1';
var PATH = '';

//list all the scripts to load (don't insert main.js file or PNG fix here)
var SCRIPTS_TO_LOAD = 	[
							PATH + 'js/lib/jquery.easing.js',
							PATH + 'js/lib/jquery.animate-enhanced.min.js',
							PATH + 'js/lib/jquery.spritely.js'
						];
						
//num version (increment it to avoid cache on main.js)
var VERSION = '1';