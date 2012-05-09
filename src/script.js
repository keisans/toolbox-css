//File: Script.js
//Site specific javascript goes here

//Demo Code/////////////////////////
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
});
//End Demo Code/////////////////////