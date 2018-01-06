require(["config"],function(){
	require(["lode"],function(){
		function usert(texts){
			var reg = /^[a-z]([a-z0-9]{5,16})$/;
			return reg.test(texts)	
			
		}
		function passt(texts){
			var reg2 = /[^\s]{6,20}$/;
			return reg2.test(texts)
		}
		$(".btn-login").click(function(){
			var login_user = $(".usernamet").val(),
				login_pass = $(".passwordt").val(),
				login_code = $(".codet").val();
				if(usert(login_user)){
					$(".usernamet-al1").html("用户名符合")
					$(".usernamet-al1").show()	
				}else{
					$(".usernamet-al1").show()					
				}
				if(passt(login_pass)){
						$(".usernamet-al2").html("正确")
						$(".usernamet-al2").show()	
				}else{
						$(".usernamet-al2").show()
				}
				//判断验证码
			if($(".checked01").is(":checked")){
					//将用户名保存到cookie
					var _user = {
						username:login_user,			
					}			
					$.cookie("users",_user,{expires:20,path:"/"})

				}
			
		})
		
		
		
		
		
	})
})