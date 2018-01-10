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
			var aa = 0;
		$.each(_cookie,function(index,elements){
			html+=`<ul class="car_ul_car">
					
					<li class="car_id" style="display: none;">${elements.id}</li>
					<li><input type="checkbox" class="che"></li>
			<li><img src="${elements.img}" style="width:100px;height:100px;"/></li>
			<li>${elements.title}</li>			
			<li>${elements.price}</li>
			<li>${elements.amount}</li>
			<li class="summ">${parseFloat(elements.price.slice(0,4)*elements.amount)}</li>
			<li class="del"><a href="javascript:void(0)">delete</a></li>		
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
				total()
			
		})
		//计算合计   点击勾选时  计算小计的值  添加到box中  函数 在数量删除是调用；
		$(".che").click(function(){
			var status = $(".che:checked").length === _cookie.length
			$(".all").prop("checked", status);
			total()
			
		})
		$(".all").click(function(){
			var status = $(".all").prop("checked")
			$(".che").prop("checked",status)
			total()
		})
		
		function total(){
			var sum = 0;
			$(".che:checked").each(function(index,elements){
				var aa = Number($(this).parents(".car_ul_car").children(".summ").html())
				sum+=aa
				$(".t3-3").html(sum)
			})}
			
		total()

		$(".send").click(function(){
			var po = $(".t3-3").html()
			$.cookie("total",po,{expires:7,path:"/"})
		})
		
		
		
	})
})