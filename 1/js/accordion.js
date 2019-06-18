$(document).ready(function() {
	$('.item__bottom-content').css('display', 'none');
	$('.item__bottom-content_first').css('display', 'block');

	$('.item__top-content').click(function() {
		$('.item__bottom-content').slideUp();
		$('.top-content__triangle').css('transform', 'rotate(0deg)');
		$('.accordion__item').css('box-shadow', '');
		$('.accordion__item_first').css('box-shadow', '0px 5px 5px 0px #ebebeb');
		if ($(this).next().css('display') != 'block' ) {
			$(this).next().slideToggle(400);
			$(this).children('.top-content__triangle').css({transform: 'rotate(180deg)'});
			$(this).parent().css('box-shadow', '0px 0px 10px 10px #ebebeb');
		}		
	})
})