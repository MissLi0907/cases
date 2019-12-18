$(document).ready(function(){
	changeNav();
	window.onresize = function(){
	    changeNav();
	};
	
	function changeNav(){
		if($(window).width()<993){
			$("header .nav-icon").slideDown();
			if(!$("header .nav-icon").hasClass("on")){
			}
		}else{
			$("header .nav-icon").slideUp();
			$("header .nav").show();
		}
	}
	
	$("header .nav-icon").click(function(){
        $(this).toggleClass("on");
  		$(".mask").fadeToggle();
        $("header .nav").slideToggle();
    })
	
	$(".mask").click(function(){
		$(".mask").fadeOut();
		$("header .nav").slideUp();
		$("header .nav-icon").removeClass("on");
	})
	
	$(".about .title h3").eq(0).click(function(){
		$(".about .title h3").eq(0).addClass("on");
		$(".about .title h3").eq(1).removeClass("on");
		$(".about-content .about-content1").removeClass("hide");
		$(".about-content .about-content2").addClass("hide");
	})
	$(".about .title h3").eq(1).click(function(){
		$(".about .title h3").eq(0).removeClass("on");
		$(".about .title h3").eq(1).addClass("on");
		$(".about-content .about-content1").addClass("hide");
		$(".about-content .about-content2").removeClass("hide");
	})
	
	$(".pagination ul li").click(function(){
		$(".pagination ul li").removeClass("on");
		$(this).addClass("on");
	})
});
