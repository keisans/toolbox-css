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