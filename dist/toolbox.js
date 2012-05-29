/*! toolbox - v0.1.0 - 2012-05-29
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
//Media query detection!
var mediaUtil = (function($) {
	var mq = function() {
			var size = window.getComputedStyle( document.body, ':after' ).getPropertyValue( 'content' );
			return size;
		};

	$(function() {
		
		var textSettings = {
				'color': 'white',
				'display': 'block',
				'paddingLeft': '1em',
				'textShadow': '0.1em 0.1em #000'
			},
			mediaTitle = $( '<span class="activeQuery" />' ).css(textSettings),
			windowSize = $( '<span class="windowSize" />' ).css(textSettings),
			container = $( '<div class="mq" />' ).css({
			'position': 'fixed',
			'bottom': 0,
			'right': 0,
			'width': '200px',
			'backgroundColor': 'rgba(0,0,0,0.6)'
		}).append(mediaTitle, windowSize).prependTo( 'body' );

		function renderMedia(){
			var w = $(window),
				sizeX = w.width(),
				sizeY = w.height();

			mediaTitle.text( mq() );
			windowSize.text( sizeX + ' x ' + sizeY );
		}

		$(window).resize(function(){
			renderMedia();
		});

		renderMedia();

	});
}(jQuery));