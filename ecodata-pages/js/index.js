document.addEventListener("DOMContentLoaded", function() {
	var body = document.body,
		html = document.documentElement;
	var itv, height = document.body.offsetHeight;  // height: 当前屏幕的高度
	var page = scrollTop() / height | 0;  // 第一屏  page为0；第二屏 page为1；以此类推
	//窗口大小改变事件
	addEventListener("resize", onresize, false);
	onresize();
	//滚轮事件
	document.body.addEventListener(
		"onwheel" in document ? "wheel" : "mousewheel",
		function(e) {
			clearTimeout(itv);
			itv = setTimeout(function() {
				var delta = e.wheelDelta / 120 || -e.deltaY / 3;  // 向下滚动 delta为-1；向上滚动 delta为1
				page -= delta;
				var max = (document.body.scrollHeight / height | 0) - 1;  // document.body.scrollHeight 为整个页面的高度
				if (page < 0) return page = 0;
				if (page > max) return page = max;
				move();
			}, 100);
			e.preventDefault();
		}
	);
	//平滑滚动
	function move() {
		var value = height * page;  //第一屏  value为0；第二屏  value为当前屏幕高度；第三屏  value为2*屏幕高度；第四屏  value为3*屏幕高度
		var diff = scrollTop() - value;  //第一屏  diff为0；向下滚动  diff为-1*屏幕高度；向上滚动  diff为 屏幕高度
		(function callee() {
			diff = diff / 1.2 | 0;  //第一屏 diff为0
			scrollTop(value + diff);
			if (diff) itv = setTimeout(callee, 16);
		})();
		sidenavSwitch(page);
	};
	//resize事件
	function onresize() {
		height = body.offsetHeight;
		move();
	};
	//获取或设置scrollTop
	function scrollTop(v) {
		if (v == null) return Math.max(body.scrollTop, html.scrollTop);
		else body.scrollTop = html.scrollTop = v;
	};
	//侧边导航切换
	function sidenavSwitch(n) {
		if(n == 0){
			$(".side-nav-item").removeClass("active");
			$(".side-nav-item:eq(0)").addClass("active");
		}else if(n == 1){
			$(".side-nav-item").removeClass("active");
			$(".side-nav-item:eq(1)").addClass("active");
		}
		else if(n == 2){
			$(".side-nav-item").removeClass("active");
			$(".side-nav-item:eq(2)").addClass("active");
		}
		else if(n == 3){
			$(".side-nav-item").removeClass("active");
			$(".side-nav-item:eq(3)").addClass("active");
		}
	};
});

//add jq
$(document).ready(function(){
	
	//侧边导航点击
	$(".side-nav-item:eq(0)").click(function(){
		$(".side-nav-item").removeClass("active");
		$(".side-nav-item:eq(0)").addClass("active");
	});
	$(".side-nav-item:eq(1)").click(function(){
		$(".side-nav-item").removeClass("active");
		$(".side-nav-item:eq(1)").addClass("active");
	});
	$(".side-nav-item:eq(2)").click(function(){
		$(".side-nav-item").removeClass("active");
		$(".side-nav-item:eq(2)").addClass("active");
	});
	$(".side-nav-item:eq(3)").click(function(){
		$(".side-nav-item").removeClass("active");
		$(".side-nav-item:eq(3)").addClass("active");
	});
	
	//-----------page3切换效果-----------
	$(".selected-line:eq(0)").css("width","1.36rem");
	
	$("#pageth-prev").click(function(){
		if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(0)").html()){
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(2)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(2)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(2)").html());
			$(".selected-line:eq(0)").css("width","0px");
			$(".selected-line:eq(2)").css("width","2.76rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg03.jpg)");
		}
		else if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(2)").html()){
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(1)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(1)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(1)").html());
			$(".selected-line:eq(2)").css("width","0px");
			$(".selected-line:eq(1)").css("width","1.36rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg02.jpg)");
		}
		else{
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(0)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(0)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(0)").html());
			$(".selected-line:eq(1)").css("width","0px");
			$(".selected-line:eq(0)").css("width","1.36rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg01.jpg)");
		}	
	});
	
	$("#pageth-next").click(function(){
		if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(0)").html()){
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(1)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(1)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(1)").html());
			$(".selected-line:eq(0)").css("width","0px");
			$(".selected-line:eq(1)").css("width","1.36rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg02.jpg)");
		}
		else if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(1)").html()){
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(2)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(2)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(2)").html());
			$(".selected-line:eq(1)").css("width","0px");
			$(".selected-line:eq(2)").css("width","2.76rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg03.jpg)");
		}
		else{
			$(".pageth-left__cnt").html($(".pageth-right__cnt:eq(0)").html());
			$(".pageth-left__ent").html($(".pageth-right__ent:eq(0)").html());
			$(".pageth-left__info").html($(".pageth-right__info:eq(0)").html());
			$(".selected-line:eq(2)").css("width","0px");
			$(".selected-line:eq(0)").css("width","1.36rem");
			$(".pageth-left").css("background-image","url(img/pageth-bg01.jpg)");
		}	
	});
	
	$(".weui-flex__item:eq(0)").mouseover(function(){
		$(".selected-line:eq(0)").css("width","0px");
	});
	
	$(".weui-flex__item:eq(1)").mouseover(function(){
		$(".selected-line:eq(1)").css("width","0px");
	});
	
	$(".weui-flex__item:eq(2)").mouseover(function(){
		$(".selected-line:eq(2)").css("width","0px");
	});

	$(".weui-flex__item:eq(0)").mouseout(function(){
		if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(0)").html())
		{
			$(".selected-line:eq(0)").css("width","1.36rem");
		}
	});
	
	$(".weui-flex__item:eq(1)").mouseout(function(){
		if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(1)").html())
		{
			$(".selected-line:eq(1)").css("width","1.36rem");
		}
	});
	
	$(".weui-flex__item:eq(2)").mouseout(function(){
	if($(".pageth-left__cnt").html()==$(".pageth-right__cnt:eq(2)").html())
	{
		$(".selected-line:eq(2)").css("width","2.76rem");
	}
	});
	//-----------page3切换效果 end-----------
});