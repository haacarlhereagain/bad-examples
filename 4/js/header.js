$(window).scroll(function() {
if ($(this).scrollTop() > 70){
$('header').addClass("header-new");
}
else{
$('header').removeClass("header-new");
}
});