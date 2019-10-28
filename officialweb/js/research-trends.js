$(document).ready(function(){
	$(".bigPic").hide();
	$(".research-item").addClass("show");
	var length;//research-item的个数
	length = $(".research-item.show").length;
	
	$(document).mouseup(function(e) { 
		var popimg = $('.bigPic img');
		var popbtn = $('.bigPic .btn i');
		if(!popimg.is(e.target) && popimg.has(e.target).length === 0 && !popbtn.is(e.target) && popbtn.has(e.target).length === 0) {
			$(".bigPic img").remove();
			$(".bigPic").hide();
		}
	})
	
	//每项热点个数 添加删除对应修改
	var strategyItemLength = 22;
	var designItemLength = 13;
	var industyItemLength = 4;
	var bigdataItemLength = 5;
	
	var titleIndex;
	$(".innerpages-title").on("click",function(){
		$(".innerpages-title").removeClass("active");
		$(this).addClass("active");
		titleIndex = $(this).index();
		if(titleIndex == 0){
			$(".research-item").removeClass("hide");
			$(".research-item").removeClass("show");
			$(".research-item:lt(" + strategyItemLength + ")").addClass("show");
			$(".research-item:gt(" + (strategyItemLength - 1) + ")").addClass("hide");
			
			length = $(".research-item.show").length;
			
			for(var i = 0;i < strategyItemLength;i++){
				$(".research-item:eq(" + i + ") img").attr("data-original","img/research/strategy/research-item" + (i+1) + ".png");
				$(".research-item:eq(" + i + ") img").attr("src","img/research/strategy/research-item" + (i+1) + ".png");
			}
		}
		else if(titleIndex == 1){
			$(".research-item").removeClass("hide");
			$(".research-item").removeClass("show");
			$(".research-item:lt(" + designItemLength + ")").addClass("show");
			$(".research-item:gt(" + (designItemLength - 1) + ")").addClass("hide");
			
			length = $(".research-item.show").length;
			
			for(var i = 0;i < designItemLength;i++){
				$(".research-item:eq(" + i + ") img").attr("data-original","img/research/design/research-item" + (i+1) + ".png");
				$(".research-item:eq(" + i + ") img").attr("src","img/research/design/research-item" + (i+1) + ".png");
			}
		}
		else if(titleIndex == 2){
			$(".research-item").removeClass("hide");
			$(".research-item").removeClass("show");
			$(".research-item:lt(" + industyItemLength + ")").addClass("show");
			$(".research-item:gt(" + (industyItemLength - 1) + ")").addClass("hide");
			
			length = $(".research-item.show").length;
			
			for(var i = 0;i < industyItemLength;i++){
				$(".research-item:eq(" + i + ") img").attr("data-original","img/research/industry/research-item" + (i+1) + ".png");
				$(".research-item:eq(" + i + ") img").attr("src","img/research/industry/research-item" + (i+1) + ".png");
			}
		}
		else if(titleIndex == 3){
			$(".research-item").removeClass("hide");
			$(".research-item").removeClass("show");
			$(".research-item:lt(" + bigdataItemLength + ")").addClass("show");
			$(".research-item:gt(" + (bigdataItemLength - 1) + ")").addClass("hide");
			
			length = $(".research-item.show").length;
			
			for(var i = 0;i < bigdataItemLength;i++){
				$(".research-item:eq(" + i + ") img").attr("data-original","img/research/bigdata/research-item" + (i+1) + ".jpg");
				$(".research-item:eq(" + i + ") img").attr("src","img/research/bigdata/research-item" + (i+1) + ".jpg");
			}
		}
	});
	
	
	$(".research-item img").on("click",function(){
		$(".bigPic").show();
		var source = $(this).attr("src");
		var bigPic = document.getElementById("bigPic");
		var img = document.createElement("img");
		img.src = source;
		bigPic.appendChild(img);
		
		var index = $(this).parent().index();
		if(index == 0){
			$(".btn .left").hide();
			$(".btn .right").show();
		}
		else if(index == (length - 1)){
			$(".btn .right").hide();
			$(".btn .left").show();
		}
		else{
			$(".btn .left").show();
			$(".btn .right").show();
		}
		$(".bigPic p")[0].innerHTML = "第<span> " + (index + 1) + " </span>张 / 共 " + length + " 张";
	});
	
	$(".btn .left").on("click",function(){
		var thisPic = $(".bigPic img").attr("src");
		var originalPic;
		var thisIndex;
		for(var i = 0;i < length;i++){
			originalPic = $(".research-item img:eq(" + i + ")").attr("data-original");
			if(originalPic == thisPic){
				thisIndex = i;
				break;
			};
		}
		if(thisIndex == 1){
			$(".btn .left").hide(400);
		}
		else if(thisIndex == (length - 1)){
			$(".btn .right").show(400);
		}

		$(".bigPic img").attr("src",$(".research-item img:eq(" + (thisIndex - 1) + ")").attr("data-original"));
		$(".bigPic p")[0].innerHTML = "第<span> " + thisIndex + " </span>张 / 共 " + length + " 张";
		
	});
	
	$(".btn .right").on("click",function(){
		var thisPic = $(".bigPic img").attr("src");
		var originalPic;
		var thisIndex;
		for(var i = 0;i < length;i++){
			originalPic = $(".research-item img:eq(" + i + ")").attr("data-original");
			if(originalPic == thisPic){
				thisIndex = i;
				break;
			};
		}
		if(thisIndex == (length - 2)){
			$(".btn .right").hide(400);
		}
		else if(thisIndex == 0){
			$(".btn .left").show(400);
		}
		
		$(".bigPic img").attr("src",$(".research-item img:eq(" + (thisIndex + 1) + ")").attr("data-original"));
		$(".bigPic p")[0].innerHTML = "第<span> " + (thisIndex + 2) + " </span>张 / 共 " + length + " 张";
		
	});
})