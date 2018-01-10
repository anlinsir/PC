//定义模块  载入 header和footer的文件
define(["jquery","cookie"],function($){
	$.cookie.json =true;
	$.ajax("/html/include/header.html").done(function(data){
		$("header").html(data)
	}).done(function(){
		var user = $.cookie("loginuser")
		if(user){
			$(".loginuser").html("<a href='/PC/src/html/car.html'>"+ user +"</a>")
			$(".register").hide()
		}
		var cookier = $.cookie("product")
	/*	console.log(cookier)
		$(".small_img").html(cookier.length)*/
		
		
	}).done(function(){
			var html = "";
			var html2 = "";
		var _users = $.cookie("users")
		html = `<a href="/index.html"><span class="loginuser">${_users.username}</span></a>`;
		html2 = `<a href="javascript:void(0)"><span class="register">/退出</span></a>`
		if(_users){
			$(".loginuser").html(html)			
			$(".register").html(html2)			
		}

	}).done(function(){
		$(".register").click(function(){
			var _users = $.cookie("users")
			if(_users){
				$.cookie("users","",{expires:-1,path:"/"})
				var html = `<a href="html/login.html"><span class="loginuser">登录</span></a><a href="html/register.html"><span class="register">/注册</span></a>`
				$(".ul2 li:nth:child(2)").html(html)
				
			}
			location = "/index.html"
		})
	})
	
	
	
	
	$.ajax("/html/include/footer.html").done(function(data){
		$("footer").html(data)
	}).done(function(){
		$(".footer-img li:nth-child(3) a").mouseenter(function(){
			$(".footer-img li:nth-child(3) img").fadeIn(500)
		})
		$(".footer-img li:nth-child(3)").mouseleave(function(){
			$(".footer-img li:nth-child(3) img").fadeOut(500)
			
		})
	})
	
	
		
})

