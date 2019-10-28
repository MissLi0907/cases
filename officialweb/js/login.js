/*
 * 
 * 
 * */
$(document).ready(function() {
    
    sessionStorage.clear();

    $("#n_links_area-left").click(function() {
        $("#we-sign-in-box").hide();
        $("#we-register").show(0, chgImg("#register_img"));
        $("#we-forget").hide();
    });
    
    $("#we-sign").click(function() {
        $("#we-sign-in-box").show();
        $("#we-register").hide();
        $("#we-forget").hide();
    });

    $("#we-forget-password").click(function() {
        $("#we-sign-in-box").hide();
        $("#we-register").hide();
        $("#we-forget").show();
    });
    
    $("#register").click(function() {
        $("#we-sign-in-box").hide();
        $("#we-forget").hide();
    });
    
    $("#we-agin-register").click(function() {
        $("#we-sign-in-box").hide();
        $("#we-forget").hide();
        $("#register-fail").hide();
        $("#we-disable").hide();
    });
    
    
    $("#we-registerback").click(function() {
    	$("#we-register").hide();
    	$("#we-sign-in-box").show();
    	$("#we-forget").hide();
    	$("#register-fail").hide();
    });    
    $("#we-forgetback ").click(function() {
    	$("#we-register").hide();
    	$("#we-sign-in-box").show();
    	$("#we-forget").hide();
    });
    $("#register").click(function() {
        $("#we-sign-in-box").hide();
        $("#we-forget").hide();
    });

    $("#sign-in-mail-phone").blur(function() {

        var value = $("#sign-in-mail-phone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            var re = /^1[3|5|7|8][0-9]{9}$/;
            if (re.test(value)) {

                $('#sign-in-prompt').hide();
            } else {

                var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
                if (re.test(value)) {

                    $('#sign-in-prompt').hide();
                } else {
                    $('#sign-in-prompt').show();
                }
            }

        } else {

            $('#sign-in-prompt').show();
        }

    });

    $("#we-password").blur(function() {

        var value = $("#we-password").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#we-sign-in-prompt-password').hide();
        } else {
            $('#we-sign-in-prompt-password').show();
        }

    });
    $("#we-input-imgone").blur(function() {

        var value = $("#we-input-imgone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#we-input-imgone-prompt').hide();
        } else {
            $('#we-input-imgone-prompt').show();
        }
    });
    $("#nameone").blur(function() {

        var value = $("#nameone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#nameone-prompt').hide();
        } else {
            $('#nameone-prompt').show();
        }
    });

    $("#we-phoneone").blur(function() {

        var value = $("#we-phoneone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            var re = /^1[3|5|7|8][0-9]{9}$/;
            if (re.test(value)) {

                $('#we-phoneone-prompt').hide();
            } else {

                $('#we-phoneone-prompt').show();
            }

        } else {
            $('#we-phoneone-prompt').show();
        }
    });
    $("#company").blur(function() {

        var value = $("#company").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#company-prompt').hide();
        } else {
            $('#company-prompt').show();
        }
    });
    $("#mail").blur(function() {

        var value = $("#mail").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (re.test(value)) {

                $('#mail-prompt').hide();
            } else {

                $('#mail-prompt').show();
            }

        } else {
            $('#mail-prompt').show();
        }
    });

    $("#password-one").blur(function() {

        var value = $("#password-one").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#password-one-prompt').hide();
        } else {
            $('#password-one-prompt').show();
        }
    });

    $("#password-agin").blur(function() {

        var value = $("#password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
        var vaql = $("#password-one").val().replace(/(^\s*)|(\s*$)/g, "");
        if (value) {
            if (vaql == value) {
                $('#password-agin-prompt').hide();
            } else {
                $('#password-agin-prompt').show();
            }

        } else {
            $('#password-agin-prompt').show();
        }
    });

    $("#we-input-imgtwo").blur(function() {

        var value = $("#we-input-imgtwo").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#we-imgtwo-prompt').hide();
        } else {
            $('#we-imgtwo-prompt').show();
        }
    });

    $("#mail-two").blur(function() {

        var value = $("#mail-two").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (re.test(value)) {

                $('#mail-two-prompt').hide();
            } else {

                $('#mail-two-prompt').show();
            }

        } else {
            $('#mail-two-prompt').show();
        }
    });

    $("#mail-verifica").blur(function() {

        var value = $("#mail-verifica").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#mail-verifica-prompt').hide();
        } else {
            $('#mail-verifica-prompt').show();
        }
    });

    $("#we-password-two").blur(function() {

        var value = $("#we-password-two").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            $('#we-password-two-prompt').hide();
        } else {
            $('#we-password-two-prompt').show();
        }
    });

    $("#we-password-agin").blur(function() {

        var value = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
        var vaql = $("#we-password-two").val().replace(/(^\s*)|(\s*$)/g, "");
        if (value) {
            if (vaql === value) {
                $('#we-password-agin-prompt').hide();
            } else {
                $('#we-password-agin-prompt').show();
            }

        } else {
            $('#we-password-agin-prompt').show();
        }
    });

    $("#login-button").click(function() {

        var value = $("#sign-in-mail-phone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (value) {
            var re = /^1[3|5|7|8][0-9]{9}$/;
            if (re.test(value)) {
                $('#sign-in-prompt').hide();
            } else {
                var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
                if (re.test(value)) {
                    $('#sign-in-prompt').hide();
                } else {
                    $('#sign-in-prompt').show();
                    return;
                }
            }

        } else {
            $('#sign-in-prompt').show();
          
        }

        var wepassword = $("#we-password").val().replace(/(^\s*)|(\s*$)/g, "");

        if (wepassword) {

            $('#we-sign-in-prompt-password').hide();

        } else {
            $('#we-sign-in-prompt-password').show();
           
        }

        var weinputimgone = $("#we-input-imgone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (weinputimgone) {
            $('#we-input-imgone-prompt').hide();

        } else {
            $('#we-input-imgone-prompt').show();
           
        }

        $.ajax({
            url:'./loginauth',
            type:'POST',
            dataType:'json',
            data:{
                name: value,
                passwd: wepassword,
                vcode: weinputimgone
            },
            success:function(data){
                if(0 == data.code){
                    history.back(-1);
                    
                    sessionStorage.setItem("realname", data.reason.realname);
                    sessionStorage.setItem("mobile", data.reason.mobile);
                    sessionStorage.setItem("email", data.reason.email);
                    sessionStorage.setItem("company", data.reason.company);
                } else {
                    alert(data.reason);
                }
            }
        });
    });

    $("#register").click(function() {
    	let flag = true;
    	
        var nameone = $("#nameone").val().replace(/(^\s*)|(\s*$)/g, "");

        if(nameone) {
            $('#nameone-prompt').hide();
        } else {
            $('#nameone-prompt').show();
            flag = false;
        }
        
        var wephoneone = $("#we-phoneone").val().replace(/(^\s*)|(\s*$)/g, "");

        if (wephoneone) {
            var re = /^1[3|5|7|8][0-9]{9}$/;
            if (re.test(wephoneone)) {

                $('#we-phoneone-prompt').hide();
            } else {

                $('#we-phoneone-prompt').show();
                flag = false;
            }

        } else {
            $('#we-phoneone-prompt').show();
            flag = false;
        }
        
        var company = $("#company").val().replace(/(^\s*)|(\s*$)/g, "");

        if (company) {

            $('#company-prompt').hide();

        } else {
            $('#company-prompt').show();
            flag = false;
        }
        var mail = $("#mail").val().replace(/(^\s*)|(\s*$)/g, "");

        if (mail) {

            var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (re.test(mail)) {
                returnStr = "手机号码正确";
                $('#mail-prompt').hide();
            } else {

                returnStr = "手机号码错误";
                $('#mail-prompt').show();
                flag = false;
            }

        } else {
            $('#mail-prompt').show();
            flag = false;
        }
        var passwordone = $("#password-one").val().replace(/(^\s*)|(\s*$)/g, "");

        if (passwordone) {

            $('#password-one-prompt').hide();

        } else {
            $('#password-one-prompt').show();
            flag = false;
        }
        var passwordagintwo = $("#password-one").val().replace(/(^\s*)|(\s*$)/g, "");
        var passwordagin = $("#password-agin").val().replace(/(^\s*)|(\s*$)/g, "");

        if (passwordagin) {

            if (passwordagin == passwordagintwo) {

                $('#password-agin-prompt').hide();
            } else {
                $('#password-agin-prompt').show();
                flag = false;
            }

        } else {
            $('#password-agin-prompt').show();
        }
        var weinputimgtwo = $("#we-input-imgtwo").val().replace(/(^\s*)|(\s*$)/g, "");

        if (weinputimgtwo) {

            $('#we-imgtwo-prompt').hide();

        } else {
            $('#we-imgtwo-prompt').show();
            flag = false;
        }
        
        if(!flag) return;
        
        $.ajax({
            url:'register',
            type:'POST',
            dataType:'json',
            data:{
                realname: nameone,
                mobile: wephoneone,
                company: company,
                email: mail,
                passwd: passwordone,
                vcode: weinputimgtwo
            },
            success:function(data){
                if(data.code == 0){
                    location.reload();
                } else {
                    $("#register-fail").show();
                    $("#we-disable").show();
                }
            },
            error:function(data){
                if(data.code == 0){
                    location.reload();
                } else {
                    $("#register-fail").show();
                    $("#we-disable").show();
                }
            }
        });
    });

    $("#login-button-agin").click(function() {
        var mailtwo = $("#mail-two").val().replace(/(^\s*)|(\s*$)/g, "");

        if (mailtwo) {

            var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (re.test(mailtwo)) {

                $('#mail-two-prompt').hide();
            } else {

                $('#mail-two-prompt').show();
            }

        } else {
            $('#mail-two-prompt').show();
        }
        var mailverifica = $("#mail-verifica").val().replace(/(^\s*)|(\s*$)/g, "");

        if (mailverifica) {

            $('#mail-verifica-prompt').hide();

        } else {
            $('#mail-verifica-prompt').show();
        }
        var wepasswordtwo = $("#we-password-two").val().replace(/(^\s*)|(\s*$)/g, "");

        if (wepasswordtwo) {

            $('#we-password-two-prompt').hide();

        } else {
            $('#we-password-two-prompt').show();
        }
        var wepasswordagin = $("#we-password-agin").val().replace(/(^\s*)|(\s*$)/g, "");
        var wecomparisonone = $("#we-password-two").val().replace(/(^\s*)|(\s*$)/g, "");
        if (wepasswordagin) {

            if (wecomparisonone == wepasswordagin) {

                $('#we-password-agin-prompt').hide();
            } else {
                $('#we-password-agin-prompt').show();
            }
        } else {
            $('#we-password-agin-prompt').show();
        }
				var weinputimgtwo = $("#we-input-imgtwo").val().replace(/(^\s*)|(\s*$)/g, "");
        if (weinputimgtwo) {

            $('#we-imgtwo-prompt').hide();

        } else {
            $('#we-imgtwo-prompt').show();
        }

    });
    
    $("#data-service-terms").click(function() {
//      $("#we-register").hide();
    
        $("#service-terms").show();
    });
    $("#close").click(function() {
        $("#service-terms").hide();
    
//      $("#we-register").show();
    });
 
});
	//20180917 add by lijunjie
    var countdown = 60;
	var getTime=function(){
		$("#we-input-img-forget").attr("disabled", true);
	    $(".we-input-img-forget").css({"background":"#aaa"});
		$(".we-input-img-forget").text("重新发送(" + countdown + "s)");
        countdown--;
	    if(countdown == -1) {
	    	$("#we-input-img-forget").attr("disabled", false);
	        $(".we-input-img-forget").css({"background":"#b89353"});
    		$(".we-input-img-forget").text("获取邮箱验证码");
	        countdown = 60;
	    } else {
	    	setTimeout('getTime()', 1000);
	    }	    
	}

function chgImg(id){
    $(id).attr('src', 'verifycodeimage?t='+Math.random());
}


//test
$("#login-button").click(function(){
	$("#user-iconfont").html("&#xe623;");
	$("#user-iconfont").attr("title","个人信息");
	$("#user-href").attr("href","personal-information.html")
})
