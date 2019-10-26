$(document).ready(function(){
	(function() {
		var timer = setTimeout(this.marquee, 1000);
	}());
});

function marquee() {
	var scrollWidth = $('.welcome').width();
	var textWidth = $('.welcome-text').width();
	var i = scrollWidth;
	setInterval(function() {
		i--;
		if (i < -textWidth) {
			i = scrollWidth;
		}
		$('.welcome-text').animate({
			'left': i + 'px'
		}, 10);
	}, 10);
}