require(["config"],function(){
	require(["lode","cookie","fly"],function(){
		$.cookie.json = true
		$(".list_top_nav li").delegate("a","click",function(){
			$(this).addClass("change")	
		})
		
		var proid = $(".proid").html()

		var list_url = `http://10.7.187.127/PC/list.php`;
		/*var list_count = `http://10.7.187.127/PC/listcount.php`
		$.ajax({
			type:"GET",
			url:list_count,
			datatype:"json",
			success:function(data){}*/
		/*}).done(function(data){
			data = JSON.parse(data)*/
			/*var tatalnum = data.message[0];*/
			$.ajax({
						url : list_url,
						type : "GET",
						datatype:"json",
						success:function(data){
							data = JSON.parse(data)
							data = data.data
							var html ="";
							$.each(data,function(index,elements){
								html+=`
									<ul class="list_con">
											<li class="proid" style="display: none;">${elements.proID}</li>
											<li class="list_img"><img src="${elements.img}" class="iimg"/></li>
											<li class="list_title">${elements.title}</li>
											<li class="list_more">${elements.more || "delicious"}</li>				
											<li class="list_price">${elements.price} / 2磅</li>											
											<li class="list_btn"><a href="javascript:void(0)">加入购物车</a></li>
										</ul>`								
							})
							$(".listcontainer").html(html)
							
						}
						
						
				}).done(function(){
					//保存商品信息					
					$(".listcontainer").on("click",".list_btn",function(){
						var _parent = $(this).parent(".list_con");
						console.log(_parent)
						
						
						var _title  =$(_parent.children(".list_title")).html(),
							_price = $(_parent.children(".list_price")).html(),
							_id = $(_parent.children(".proid")).html(),
							_more = $(_parent.children(".list_more")).html(),
							_img= _parent.children(".list_img").find('img.iimg').attr("src")
							


						var _products = {
							id:_id,
							title:_title,
							more:_more,
							price:_price,
							img:_img,
							amount:1					
						}
						
						var productss = $.cookie("product") || [];
						
						var index = exist(_products.id,productss)
						if(index == -1){
							productss.push(_products)
							
						}else{
							productss[index].amount++
							
						}
						
						
						
						$.cookie("product",productss,{expires:30,path:"/"})
						
						
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
					

					
						//运动动作
						var flyer = $(`<img src="${_img}">`);
								flyer.fly({
									start:{
										left : event.pageX,
										top : event.pageY
									},
									end:{
										left : $(window).width()-50,
										top :50,
										width: 0,
										height: 0
									}
								});
						
					})
				}).done(function(){
					$(".listcontainer").on("click",".list_img",function(){
						var _id = $(this).siblings(".proid").html()
							var idurl = `http://10.7.187.127/PC/check.php?id=${_id}`
							$.ajax({
								url : idurl,
								type:"GET",
								datatype:"json",
								success:function(data){
									data = JSON.parse(data);
									data = data.data;
									console.log(data)
									var _products = {}
									$.each(data,function(index,elements){
										_products = {
											id:elements.id,
											img:elements.img,
											more:elements.more,
											price:elements.price,
											title:elements.title
										}
									})
									console.log(_products)
									$.cookie("productsInList",_products,{expires:2,path:"/"})
									
									location = "/html/detail.html"
									
								}
							})
							
							
					})
					
					
				})
				
				
		
		
		
	})
})



















/*console.log(data.message)
							var html = "";
							var _id = 0; 
															
								 html = `<ul class="list_con">
											<li class="proid" style="display: none;">${data.message.proID}</li>
											<li class="list_img"><img src="${data.message.img}"/></li>
											<li class="list_title">${decodeURIComponent(data.message.title)}</li>
											<li class="list_more">${data.message.more || "delicious"}</li>				
											<li class="list_price">${data.message.price} / 2磅</li>											
											<li class="list_btn"><a href="javascript:void(0)">加入购物车</button></li>
										</ul>`;
							
							$(".listcontainer").html(html)*/