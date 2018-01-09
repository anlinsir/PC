require(["config"],function(){
	require(["lode","cookie"],function(){
		//获取cookie
		$.cookie.json = true
		function exist(id, products) {
						var idx = -1;
						$.each(products, function(index, elemenet){
							if (elemenet.id == id) {
								idx = index;
								return false;
							}
						});
			
						return idx;
					}
		
		var _cookie = $.cookie("product")
		

		
		
			var html = "";
			
		$.each(_cookie,function(index,elements){
			html+=`<ul class="car_ul_car">
					<li class="car_id" style="display: none;">${elements.id}</li>
			<li><img src="${elements.img}" style="width:100px;height:100px;"/></li>
			<li>${elements.title}</li>			
			<li>${elements.price}</li>
			<li>${elements.amount}</li>
			<li>${parseFloat(elements.price.slice(0,4)*elements.amount)}</li>
			<li class="del"><a href="javascript:viod(0)">delete</a></li>		
			</ul>
			`
		})
		$(".car_body").html(html)
		
		$(".car_body").on("click",".del",function(){
			var _parents = $(this).parent(".car_ul_car")
			var _id = _parents.children(".car_id").html()
				var index = exist(_id,_cookie);
				_cookie.splice(index,1)
				$.cookie("product",_cookie,{expires:20,path:"/"})
				_parents.remove()
			
		})
		
		
		
		
		
	})
})