require(["config"],function(){
	require(["lode"],function(){
		$.cookie.json = true;
//		var user = $(".username").val();
		function usert(texts){
			var reg = /^[a-z]([a-z0-9]{5,16})$/;
			return reg.test(texts)	
			
		}
		function passt(texts){
			var reg2 = /[^\s]{6,20}$/;
			return reg2.test(texts)
		}
		
		/*$(".username").blur(function(){
			var reg = /^[a-z]([a-z0-9]{5,16})$/;
			if(reg.test($(this).val())){	
			$(".mark1").html("用户名符合")
			$(".mark1").show()		
			}else{
			$(".mark1").show()
			}
		})*/
	/*	$(".password").blur(function(){
			var reg2 = /[^\s]{6,20}$/;
			if(reg2.test($(this).val())){
			$(".mark2").html("正确")
			$(".mark2").show()				
			}else{
			$(".mark2").show()
			}
		})
		*/
		
		
		
		
		
		$(".btn").click(function(){
			var user = $(".username").val(),
				pass = $(".password").val(),
				ema = $(".email").val(),
				ph = $(".phone").val();

				if(usert(user)){
					$(".mark1").html("用户名符合")
					$(".mark1").show()	
				}else{
					$(".mark1").show()					
				}
				if(passt(pass)){
						$(".mark2").html("正确")
						$(".mark2").show()	
				}else{
						$(".mark2").show()
				}
				//判断多选是否已经选上
				
				if(usert(user) && passt(pass)){
					
					
					var urll = `http://10.7.187.127/PC/pcselector.php?username=${user}`;
					$.ajax({
						url : urll,
						type : "GET",
						datatype:"json",
						success:function(data){
							console.log(data)
							
						}
					})
					
					
					
					

					
							//数据库
						var urls = 				`http://10.7.187.127/PC/pc.php?username=${user}&password=${pass}&email=${ema}&phone=${ph}`;
		//			console.log(user,pass,ema,ph)
					$.ajax({
						url: urls,
						type: "GET",
						datatype:"json",
						success:function(data){

						}
					});				
				}
				/**/
				
				
				
			
			
		})
		
		
		
		
		
	//之内	
	})
})