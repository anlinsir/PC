require(["config"],function(){
	require(["lode"],function(){
//		var user = $(".username").val();
		
		/*$(".username").blur(function(){
			var reg = /^[a-z]([a-z0-9]{7,16})$/;
			if(reg.test($(this).val())){
			console.log("成功")
		}else{
			console.log("失败")
		}
		})*/
		
		$(".btn").click(function(){
			var user = $(".username").val(),
				pass = $(".password").val(),
				ema = $(".email").val(),
				ph = $(".phone").val();
				
				var urls = `http://10.7.187.127/PC/pc.php?username=${user}&password=${pass}&email=${ema}&phone=${ph}`;
//			console.log(user,pass,ema,ph)
			$.ajax({
				url: urls,
				type: "GET",
				datatype:"json",
				success:function(data){
					console.log(data)
				}
			});
			
			
		})
		
		
		
		
		
		
	})
})