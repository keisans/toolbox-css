/*! toolbox - v0.1.0 - 2012-05-10
* http://www.digitalbungalow.com/
* Copyright (c) 2012 Ryan Struhl; Licensed MIT */

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
//File: Script.js
//Site specific javascript goes here

//Demo Code/////////////////////////
var $ = window.$;

$(function(){
	var titler = function titler(){
		var target = $('.block_test div');
		target.each(function(index){
			var that = $(this);
			var w = that.width() + 'px';
			that.attr('title', w);
		});
	};

	titler();

	$(window).resize(function(){
		titler();
	});

	if(window.prettyPrint && $('.prettyprint').length > 0){
		window.yepnope({
			load: 'libs/google-code-prettify/prettify.css',
			callback: function(){
				window.prettyPrint();
			}
		});
	}
});
//End Demo Code/////////////////////