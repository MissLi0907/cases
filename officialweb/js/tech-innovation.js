$(document).ready(function(){
	
	var titleIndex;
	var patentItemLength = 14;
	var qualItemLength = 7;
	var qualTitle = [
		"建筑业企业资质证书",""
	];
	$(".innerpages-title").on("click",function(){
		$(".innerpages-title").removeClass("active");
		$(this).addClass("active");
		titleIndex = $(this).index();
		if(titleIndex == 0){
			$(".patent-item").removeClass("hide");
			$(".patent-item:gt(" + (patentItemLength - 1) + ")").addClass("hide");
			for(var i = 0;i < patentItemLength;i++){
				$(".patent-item:eq(" + i + ") img").attr("data-original","img/patent/patent" + (i+1) + ".jpg");
				$(".patent-item:eq(" + i + ") img").attr("src","img/patent/patent" + (i+1) + ".jpg");
				$(".patent-item:eq(" + i + ") p").css("display","block");
			}
		}
		else if(titleIndex == 1){
			$(".patent-item").removeClass("hide");
			$(".patent-item:gt(" + (qualItemLength - 1) + ")").addClass("hide");
			for(var i = 0;i < qualItemLength;i++){
				$(".patent-item:eq(" + i + ") img").attr("data-original","img/Qualifications/qual" + (i+1) + ".jpg");
				$(".patent-item:eq(" + i + ") img").attr("src","img/Qualifications/qual" + (i+1) + ".jpg");
				$(".patent-item:eq(" + i + ") p").css("display","none");
			}
		}
	});
	
})