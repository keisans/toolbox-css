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