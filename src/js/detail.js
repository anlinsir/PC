require(["config"],function(){
	require(["lode","cookie"],function(){
		$(function(){
			$.cookie.json = true;
		var detail_cookie = $.cookie("productsInList");
		console.log(detail_cookie)
		var _img = detail_cookie.img;
		console.log(_img)
		$(".product_img_img").attr("src",_img)
		var _title = detail_cookie.title;		
		var _price = detail_cookie.price;
		$(".product_title").html(_title)
		$(".product_price").html(_price+"/2.0磅")
			
			
			
		})
	
	
	})
})