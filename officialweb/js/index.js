$(function(){
	$("body").addClass("loading")
	$(".main").css("padding-top","0")
	$(".main").addClass("index")
//	$(".footer").css("background","#fff")
	setTimeout(function(){
		$("body").removeClass("loading")
		$("#pageloader").addClass("hiden")		
		setTimeout(function(){
			$("#pageloader").remove()
		},2000)					
	},2000)	

	var bannerSwiper = new Swiper('.idx-banner .swiper-container',{
		speed: 1000,
		loop: true,
		autoplay: 5000,
		onSlideChangeStart: function(swiper){
			var  len = swiper.slides.length-2
			var  idx = swiper.activeIndex-1
			if(idx<len){
				$(".swiper-dots .swiper-dots-item").eq(idx).addClass("swiper-dots-item-active").siblings().removeClass("swiper-dots-item-active")
			}else{
				$(".swiper-dots .swiper-dots-item").eq(Math.abs(idx-len)).addClass("swiper-dots-item-active").siblings().removeClass("swiper-dots-item-active")
			}
		}
	})
	
	$(".swiper-dots-item").click(function(){
		$(this).addClass("swiper-dots-item-active").siblings().removeClass("swiper-dots-item-active")
		bannerSwiper.slideTo($(this).index()+1,1000,true)
		bannerSwiper.startAutoplay()
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(window).height()-$(".navbar").outerHeight()){
			$(".main").removeClass("index")
		}else{
			$(".main").addClass("index")
		}
	})
	//video
	$(".player").click(function(){
		$(".poster").hide()
		$("video").show().trigger("play")
	})
	
	$(".newspic").each(function(i,e){
		$(e).height($(e).parent().height())
	})	
	$(window).resize(function(){
		$(".newspic").each(function(i,e){
			$(e).height($(e).parent().height())
		})			
	})	
});

$("#switch-icon-refresh").click(function() {
	if($("#iconGroup2").is(":hidden")){
		$("#iconGroup1").hide();
		$("#iconGroup2").fadeIn(1500);}
	else{
		$("#iconGroup2").hide();
		$("#iconGroup1").fadeIn(1500);
	}
});
