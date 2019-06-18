$(window).scroll(function() {
if ($(this).scrollTop() > 770){
$('header').addClass("header-remove");
}
else{
$('header').removeClass("header-remove");
}
});