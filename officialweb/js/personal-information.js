$(document).ready(function() {
	$("#modify").click(function() {
		$("#we-modify").show();
	});
	$("#we-password").blur(function() {

		var value = $("#we-password").val().replace(/(^\s*)|(\s*$)/g, "");

		if(value) {
			$('#we-password-prompt').hide();
		} else {
			$('#we-password-prompt').show();
		}
	});
	$("#we-password-agin").blur(function() {

		var value = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
		var vaql = $("#we-password").val().replace(/(^\s*)|(\s*$)/g, "");
		if(value) {
			if(vaql != value) {
				$('#we-password-agin-prompt').hide();
			} else {
				$('#we-password-agin-prompt').show();
			}

		} else {
			$('#we-password-agin-prompt').show();
		}
	});
$("#we-agintwo").blur(function() {

	        var value = $("#we-agintwo").val().replace(/(^\s*)|(\s*$)/g, "");
	        var vatwo = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
	        if (value) {
	            if (value == vatwo) {
	                $('#we-agintwo-prompt').hide();
	            } else {
	                $('#we-agintwo-prompt').show();
	            }

	        } else {
	            $('#we-agintwo-prompt').show();
	        }
	    });
	
	$("#modify-password").click(function() {
		let flag = true;
		var oldpasswd = $("#we-password").val().replace(/(^\s*)|(\s*$)/g, "");

		if(oldpasswd) {

			$('#we-password-prompt').hide();

		} else {
			$('#we-password-prompt').show();
			flag = false;
		}

		var newpasswd = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
		if(oldpasswd) {

			if(oldpasswd != newpasswd) {

				$('#we-password-agin-prompt').hide();
			} else {
				$('#we-password-agin-prompt').show();
				flag = false;
			}
		} else {
			$('#we-password-agin-prompt').show();
			flag = false;
		}
		var wepasswordagin = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
		var weagintwo = $("#we-agintwo").val().replace(/(^\s*)|(\s*$)/g, "");
		if(weagintwo) {

			if(wepasswordagin == weagintwo) {

				$('#we-agintwo-prompt').hide();
			} else {
				$('#we-agintwo-prompt').show();
				flag = false;
			}
		} else {
			$('#we-agintwo-prompt').show();
			flag = false;
		}

		if(!flag) return;
		
		$("#we-disable").show();
		$("#we-modify").hide();

		$.ajax({
			url: 'modpasswd',
			type: 'POST',
			dataType: 'json',
			data: {
				realname: $("#realname").text(),
				mobile: $("#mobile").text(),
				company: $("#company").text(),
				email: $("#email").text(),
				oldpasswd: oldpasswd,
				newpasswd: newpasswd
			},
			success: function(data) {
				$("#mod-passwd").text(data.reason);
				$("#register-success").show();
			},
			error: function(data) {
				$("#mod-passwd").text(data.reason);
				$("#register-success").show();
			}
		});

	});
	$("#we-closeone").click(function() {
		$("#we-modify").hide();
	});

	$("#we-close").click(function() {

		$("#register-success").hide();
		$("#we-disable").hide();
	});
	
})
	