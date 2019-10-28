//rem转化px
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 750) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var navSwiper = new Swiper('.nav .swiper-container', {
    observer:"true",
	observeParents:"true",
	slidesPerView: 'auto',
	spaceBetween: 0,
});
var teamSwiper = new Swiper('.team .swiper-container', {
    observer:"true",
	observeParents:"true",
    navigation: {
        nextEl: '.team .swiper-button-next',
        prevEl: '.team .swiper-button-prev',
    },
    loop : true,
	autoplay: true,
});
var targetsSwiper = new Swiper('.annual-targets .swiper-container', {
	observer:"true",
	observeParents:"true",
	autoplay: true,
	speed: 1000,
	navigation: {
    	nextEl: '.annual-targets .swiper-button-next',
    	prevEl: '.annual-targets .swiper-button-prev',
  	},
});
$(".nav .swiper-slide").click(function(){
	$("html,body").stop().animate({scrollTop: $(".sections").eq($(this).index()).offset().top},600)
	navSwiper.slideTo($(this).index(), 1000, false)
});

$(".level3-2").hide();
$(".level3-3").hide();
$(".level4-2").hide();

$(".level2").children().on('click', function(){
	if($(this).hasClass("active")) return;
	var index = $(this).index();
	$(".level2").children().removeClass("active");
	$(this).addClass("active");
	if(index == 3){
		$(".level3").children().hide();
		$(".level3-3").slideDown(500);
		$(".level4").children().hide();
	}else{
		$(".level3").children().hide();
		$(".level3-" + (index + 1)).slideDown(500);
		$(".level4").children().hide();
		$(".level4-" + (index + 1)).slideDown(500);
	}
})
