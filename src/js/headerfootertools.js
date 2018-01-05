//定义模块  载入 header和footer的文件
define(["jquery","cookie","index"],function($){
	$.ajax("html/include/header.html").done(function(data){
		$("header").html(data)
	}).done(function(){
		var user = $.cookie("loginuser")
		if(user){
			$(".loginuser").html("<a href='/PC/src/html/car.html'>"+ user +"</a>")
			$(".register").hide()
		}
	})
	
	
	
	
	$.ajax("html/include/footer.html").done(function(data){
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

