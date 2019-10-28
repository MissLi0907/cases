$(document).ready(function(){
	$(".expert-team li:gt(9)").hide();
	
	$(".page-num a").on("click",function(){
		var page = $(this)[0].innerHTML;
		$(".expert-team li").show();
		$(".expert-team li:lt(" + ((page - 1) * 10) + ")").hide();
		$(".expert-team li:gt(" + (page * 10 - 1) + ")").hide();
		$(".page-num a").removeClass("active");
		$(".page-num a:eq(" + (page - 1) + ")").addClass("active");
	});
	
	$(".expert-textlist .listbd:gt(9)").hide();
	$(".expert-textlist .listbd:last-child").show();
	
	var length = $(".listbox .listbd").length - 1;//最后一项不包括
	
	$(".expert-textlist .listbd:last-child span").html("加载更多<i>剩余 " + (length - 10) + " 项</i>");
	
	var dataPinyin = ['TOP'];
	dataPinyin.push($(".listbox .listbd:eq(0)").attr("data-pinyin"));
	for(var i = 1;i < length;i++){
		var pinyin = $(".listbox .listbd:eq(" + i + ")").attr("data-pinyin");
		var pinyinPrev = $(".listbox .listbd:eq(" + (i - 1) + ")").attr("data-pinyin");
		if(pinyin == pinyinPrev){
			continue;
		}
		dataPinyin.push(pinyin);
	}
	
	var letterHtml = ''; 
	for(var i = 0; i < dataPinyin.length;i++){
		letterHtml += "<i>" + dataPinyin[i] + "</i>"
	}
	$(".letter").html(letterHtml);
	$(".letter i:eq(0)").hide();
	
	var tlHgt = $(".expert-textlist").offset().top;/*专家列表距离顶部的高度*/
	var tlselfHgt = $(".expert-textlist").height() / 2;/*专家列表自身高度的1/2*/
	var winHgt = $(window).height();
	var scrollHgt;
	var topHgt;
	var loadBottom;/*加载条距离底部的距离*/
	var letterBottom;/*字母条距离底部的距离*/
	var ltselfHgt = $(".letter").height();/*字母条自身的距离*/
	var loadselfHgt = $(".expert-textlist .listbd:last-child").height();
	var t = 0;
	var docHgt;
	setTimeout(function(){docHgt = $(document).height();},0);   
	scrollHgt = $(document).scrollTop();
	$(window).scroll(function(){
		scrollHgt = $(document).scrollTop();
		topHgt = scrollHgt - tlHgt + tlselfHgt;
		loadBottom = $(document).height() - $(".expert-textlist .listbd:last-child").offset().top;//固定值
		letterBottom = $(document).height() - $(".letter").offset().top;//变化值
		if(t <= scrollHgt){ //向下滚动
			if(scrollHgt > (tlHgt - tlselfHgt) && ((letterBottom - ltselfHgt) > loadBottom)){
				$(".letter").css("top",topHgt);
			}
        }  
        else{ //向上滚动
        	if(scrollHgt > (tlHgt - tlselfHgt)){
        		if($(document).height() <= docHgt){
                	$(".letter").css("top",0);
                	
        		}else{
                	$(".letter").css("top",topHgt);
        		}
        	}
        }  
        setTimeout(function(){t = scrollHgt;},0);   
	});
	
	$(".expert-textlist .listbd:last-child").on("click",function(){
		var str = $(".expert-textlist .listbd:last-child span").text();
		if(str.indexOf("共计") != -1){
			
		}
		else{
			$(".letter i:eq(0)").show();
			var index;
			for(var i = 0;i < length;i++){
				var display = $(".listbox .listbd:eq(" + i + ")").css("display");
				if(display == "none"){
					index = i;
					break;
				}
			}
			$(".expert-textlist .listbd:last-child span").html("继续加载<i>剩余 " + (length - index - 20) + " 项</i>");
			$(".expert-textlist .listbd:lt(" + (index + 20) + "):gt(" + (index - 1) + ")").show();
			var allShow = $(".listbox .listbd:eq(" + (length - 1) + ")").css("display");
			if(allShow == "flex"){
				$(".expert-textlist .listbd:last-child span").text("加载完毕");
				$(".expert-textlist .listbd:last-child").css("background","gray");
				$(".expert-textlist .listbd:last-child span").css("animation","none");
			}}
		
	});
	
	$(".letter i").on("click",function(){
		$(".expert-textlist .listbd:last-child").css("background","#33a1dc");
		$(".letter i").css("color","#999");
		$(this).css("color","#33a1dc");
		var pinyinClicked = $(this).text();
		if(pinyinClicked == 'TOP'){
        	/*$("html,body").animate({scrollTop:"-=120px"},"slow");*/
			$(".expert-textlist .listbd").show();
			$(".expert-textlist .listbd:gt(9)").hide();
			$(".expert-textlist .listbd:last-child").show();
			$(".expert-textlist .listbd:last-child span").html("加载更多<i>剩余 " + (length - 10) + " 项</i>");
			$(".letter").css("max-height",13 * 1.5 * dataPinyin.length);//文字大小 * 行高  * 个数
		}
		else{
			$(".letter").css("top",0);
			$(".expert-textlist .listbd").hide();
			$("[data-pinyin=" + pinyinClicked + "]").show();
			$(".expert-textlist .listbd:last-child").show();
			var clickedLength = $("[data-pinyin=" + pinyinClicked + "]").length;
			$(".expert-textlist .listbd:last-child span").text("共计 " + clickedLength + " 项");
			$(".letter").css("max-height",(clickedLength + 1) * 48);
			/*var pinyinIndex;
			for(var i = 0;i < length;i++){
				if($(".listbox .listbd:eq(" + i + ")").attr("data-pinyin") == pinyinClicked){
					pinyinIndex = i;
					break;
				}
			}*/
		}
	})
});