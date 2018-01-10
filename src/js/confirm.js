require(["config"],function(){
	require(["lode","cookie"],function(){
		
			//拿到省份数据
			var url1 = `http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1&page=1`;
			var url1_2 = `http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1&page=2`
			$.when($.ajax(url1),$.ajax(url1_2)).then(function(a1,a2){
				var a3 = a1[0].showapi_res_body.data.concat(a2[0].showapi_res_body.data);
				var html = `<option value="-1">请选择省</option>`;
				$.each(a3,function(index,elements){
					html+=`<option value="${elements.id}">${elements.areaName}</option>`
				})
				$(".sel1").html(html)
			})
			
			function city(){
				var _id = $(".sel1").val()

			var url3 = `http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=${_id}`
				$.getJSON(url3).done(function(data){
					data = data.showapi_res_body.data
					var html =`<option value="-1">请选择城市</option>`
					$.each(data,function(index,elements){
						html+=`<option value="${elements.id}">${elements.areaName}</option>`
					})
					$(".sel2").html(html)
				})
					
			}
			function lode(){
				var _id = $(".sel2").val()
				var url4 =`http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=${_id}`;
				$.getJSON(url4).done(function(data){
					data = data.showapi_res_body.data
					var html=`<option value="-1">请选择地区</option>`;
					$.each(data,function(index,elements){
						html+=`<option value="${elements.id}">${elements.areaName}</option>`
					})
					$(".sel3").html(html)
				})
				
			}
			
			
			$(".sel1").change(function(){
				$(".sel2").html(`<option value="-1">请选择城市</option>`)
				$(".sel3").html(`<option value="-1">请选择地区</option>`)
				city()
			})
			$(".sel2").change(function(){
				$(".sel3").html(`<option value="-1">请选择地区</option>`)
				
				lode()
			})
			
			
		
		
		var _total =$.cookie("total")
		if(_total){
			console.log(_total)
			$(".addre").html(_total)
		}else{
			$(".addre").html("没有选商品")
		}
		
	})
})