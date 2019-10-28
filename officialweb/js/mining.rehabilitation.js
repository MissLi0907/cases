$("#switch-next").click(function() {
	if($("#rf-group2").is(":hidden")&&$("#rf-group3").is(":hidden")){
		$("#rf-group1").hide();
		$("#rf-group2").fadeIn();
	}
	else if($("#rf-group1").is(":hidden")&&$("#rf-group3").is(":hidden")){
		$("#rf-group2").hide();
		$("#rf-group3").fadeIn();
	}
	else{
		$("#rf-group3").hide();
		$("#rf-group1").fadeIn();
	}
});
$("#switch-prev").click(function() {
	if($("#rf-group2").is(":hidden")&&$("#rf-group3").is(":hidden")){
		$("#rf-group1").hide();
		$("#rf-group3").fadeIn();
	}
	else if($("#rf-group1").is(":hidden")&&$("#rf-group3").is(":hidden")){
		$("#rf-group2").hide();
		$("#rf-group1").fadeIn();
	}
	else{
		$("#rf-group3").hide();
		$("#rf-group2").fadeIn();
	}
});