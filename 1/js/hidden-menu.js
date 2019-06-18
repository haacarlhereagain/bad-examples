
$(document).ready(function() {
	$('.right-content-nav__hidden-button-nav').click(function() {
		if ( $('.hidden-menu').css('left') == '-180px' ) {
			$('.hidden-menu').animate({left: '-20px'}, 300);
		}
	});

	$(document).mouseup(function(e) {
		if ( !$('.hidden-menu').is(e.target) 
			&& $('.hidden-menu').has(e.target).length === 0 ) {
			$('.hidden-menu').animate({left: '-180px'}, 300);
	}
})
})