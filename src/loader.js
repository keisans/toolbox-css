var loader = (function() {
	var loaded = [];
	
	window.yepnope([{
		test: window.Modernizr.mq('(min-width: 0px)'),
		nope: "libs/respond.js",
		callback: function(url, result, key){
			if (!result){
				loaded.push(url);
			}
		}
	}]);

	return loaded;
}());