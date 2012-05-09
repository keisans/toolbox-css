var loader = (function($) {
	
	//This is the default set of libraries (excluding jQuery) for a Toolkit site
	//Any of these libraries can be turned off by setting its value to false.
	var thisProjectHas = {
		'Underscore': true,
		'Backbone': true,
		'Handlebars': true,
		'Prettyprint': true
	};

	//Add the URL for any custom script you want to load by default into this array
	var thisProjectCustomScripts = [
		'js/script.js'
	];

	//The Loader object (unless you're conditionally loading something, you shouldn't need to touch this)
	//If another test is added to this system, make sure the library's dependencies are
	//included in the loading statement (yepnope is smart enough to only ever load a resource once)
	//e.g. Backbone requires Underscore to be loaded, so Backbone loads both, allowing it to work even if
	//Underscore is set to false.
	window.yepnope([{
		test: thisProjectHas.Underscore,
		yep: "js/libs/underscore.js"
	}, {
		test: thisProjectHas.Backbone,
		yep: ["js/libs/underscore.js", "js/libs/backbone.js"]
	}, {
		test: thisProjectHas.Handlebars,
		yep: "js/libs/handlebars.js"
	}, {
		test: thisProjectHas.Prettyprint && ($('.prettyprint').length > 0),
		yep: {
			prettyCss: "js/google-code-prettify/prettify.css",
			prettyJs: "js/google-code-prettify/prettify.js"
		},
		callback: {
			prettyJs: function(){
				window.prettyPrint();
			}
		}
	}, {
		test: window.Modernizr.mq('(min-width: 0px)'),
		nope: "js/libs/respond.js"
	}, {
		load: thisProjectCustomScripts
	}]);

	//window.loader returns this object showing what the settings were for the loader
	return {
		defaults: thisProjectHas,
		custom: thisProjectCustomScripts
	};
}(jQuery));