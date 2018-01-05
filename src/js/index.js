require(["config"],function(){
	require(["lode","loop"],function(){
	
		//轮播图的设置
		$(".loop").eq(0).carousel({
			imgs : [
				{src:"img/loop.jpg", href:"#"},
				{src:"img/loop1.jpg", href:"#"},
				{src:"img/loop2.jpg",href:"#"}
			],
			width:1262,
			height: 630,
			type: "fade",
			duration: 5000
		});
		//
		$.ajax({
				type : 'get',
				url : 'mock/index_ajax_noe.json',
				dataType : "json",
				success : function(data){
					var html = "";
					
					$.each(data.res_body.data,function(index,elements){
						html+=`
						<li>
						<div style="display:none;">${elements.id}</div>
						<img src="${elements.img}"/>
							<p>${elements.title}</p>
							<h6>${elements.more}</h6>
							<div class="tag_list">
							<a href="#">${elements.tag[0]}</a>
							<a href="#">${elements.tag[1]}</a>
							<a href="#">${elements.tag[2] || "more"}</a>
							<a href="#">${elements.tag[3] || "more"}</a>
							
							</div>						
							<div class="hr"></div>						
							<div class="peice">
								<span>${elements.price}/2.0磅</span>
								<button type="button" class="add_cart">加入购物车</button>
							</div>
							</li>`	
						
						
						
					})
					$(".lis").html(html)
					
				}
				
		});
		
		
			// 异步加载模拟的假数据
			$.ajax({
				type : 'get',
				url : 'mock/index_ajax_two.json',
				dataType : "json",
				success : function(data){
					var html = "";
					
					$.each(data.res_body.data,function(index,elements){
						html+=`
						<li>
						<div style="display:none;">${elements.id}</div>
						<img src="${elements.img}"/>
							<p>${elements.title}</p>
							<h6>${elements.more}</h6>
							<div class="tag_list">
							<a href="#">${elements.tag[0]}</a>
							<a href="#">${elements.tag[1]}</a>
							<a href="#">${elements.tag[2] || "more"}</a>
							<a href="#">${elements.tag[3] || "more"}</a>
							
							</div>						
							<div class="hr"></div>						
							<div class="peice">
								<span>${elements.price}/2.0磅</span>
								<button type="button" class="add_cart">加入购物车</button>
							</div>
							</li>`	
						
						
						
					})
					$(".lis2").html(html)
					
				}
				
		});	
		
		
		})
	
	})

	/*	$(".loop").eq(0).carousel({
			imgs:[{
				src:"../img/loop.jpg"
			},{
				src:"../img/loop1.jpg"
			},{
				src:"../img/loop2.jpg"
			}],
			width:1280,
			height:620,
			type:"fade",
			duration:3000
		})*/