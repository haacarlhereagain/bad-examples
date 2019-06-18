$(document).ready(function() {
	var min = 0;
	var max = 627;
	$('.top-arrow').click(function() {
		if ( $('.slider__line').css('top') != '0px' ) {
			$('.slider__line').animate({top: '+=209'}, 200);
		}
	})
	$('.bottom-arrow').click(function() {
		if ( $('.slider__line').css('top') != '-418px' ) {
			$('.slider__line').animate({top: '-=209'}, 200);
		}
	})
})