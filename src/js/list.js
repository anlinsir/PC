require(["config"],function(){
	require(["lode"],function(){

		$(".list_top_nav li").delegate("a","click",function(){
			$(this).addClass("change")
			
			
		})


	})
})