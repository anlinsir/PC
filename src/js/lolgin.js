require(["config"],function(){
	require(["lode","cookie"],function(){
		$.cookie.json = true
		function usert(texts){
			var reg = /^[a-z]([a-z0-9]{5,16})$/;
			return reg.test(texts)	
			
		}
		function passt(texts){
			var reg2 = /[^\s]{6,20}$/;
			return reg2.test(texts)
		}
		//生成验证码
		function subaa(num){
					var _num = 0;
					var sum = "";
					while(_num <num){
					
					var rand = Math.floor(Math.random()*74)+48;
						if(rand>48 && rand<57 || rand>97 && rand<122 ||rand>65 && rand<90){
							var cha =String.fromCharCode(rand);
							sum+=cha;
							_num++;
						}
						
						}
					return sum
				}
		

		$(".code").click(function(){
			$(this).html(subaa(4))
			$(this).attr("coded",$(this).html())
		})
	
		$(".code").css({
			"color": "#000",
			"font-size":"18px"
		})
		
		
		
		$(".btn-login").click(function(){
			var login_user = $(".usernamet").val(),
				login_pass = $(".passwordt").val(),
				login_code = $(".codet").val(),
				_coded = $(".code").attr("coded"),
				_codedd = $(".code").attr("codeTow");
				/*if(login_code.toUpperCase() == _coded.toUpperCase()){
					
				}*/
			/*	function codedd(){
					if(login_code.toUpperCase() == _coded.toUpperCase()){
						return true
					}else{
						return false
					}
				}*/
				/*if(usert(login_user)){
					$(".usernamet-al1").html("用户名符合")
					$(".usernamet-al1").show()	
				}else{
					$(".usernamet-al1").show()					
				}*/
				/*if(passt(login_pass)){
						$(".usernamet-al2").html("格式正确")
						$(".usernamet-al2").show()	
				}else{
						$(".usernamet-al2").show()
				}*/		
				//判断验证码
				//判断用户名存在
				var urll = `http://10.7.187.127/PC/pcselector.php?username=${login_user}`;
					$.ajax({
						url : urll,
						type : "GET",
						datatype:"json",
						success:function(data){
							data = JSON.parse(data)
							var _status = data.message

								if(_status == 0){								
									$(".usernamet-al10").html("用户名不存在")
									$(".usernamet-al10").show()	
									$(".usernamet-al0").hide()									
								}else if(_status == 1){								
									$(".usernamet-al10").hide()
									$(".usernamet-al200").show()
									var passurl = `http://10.7.187.127/PC/loginpass.php?username=${login_user}`;
									$.ajax({
										url:passurl,
										type:"GET",
										datatype:"json",
										success:function(data){
											data = JSON.parse(data)
											data = data.message
											data = data.password
											console.log(data)
											//加上验证码的判断
											
											if(data == login_pass){
												
												
												if($(".checked01").is(":checked")){
												//将用户名保存到cookie
													var _user = {
													username:login_user,			
												}			
													$.cookie("users",_user,{expires:20,path:"/"})
													location = "/index.html"
					
													}else{
														var _user = {
															username:login_user,			
														}			
															$.cookie("users",_user,{path:"/"})
												
													location = "/index.html"
												}
												
												}else{
													$(".usernamet-al2").show()
												}
												
											if(login_code.toUpperCase() !== _coded.toUpperCase()){
													$(".usernamet-al3").show()		
											}else if(typeof login_code === "undefined"){
													$(".usernamet-al3").html("输入验证码")
													$(".usernamet-al3").show()
											}else{
												$(".usernamet-al3").hide()
											}
												
											
										}
									
									})
									
								}
						}		
			
			});
		
		
		
		
		
	})

			var login_user = $(".usernamet").val();
		
		
})
	})