require.config({
	baseUrl :"/",
	paths:{
		"jquery":["https://code.jquery.com/jquery-1.12.4.min","lib/jquery/jquery-1.12.4.min"],
		"lode":"js/headerfootertools",
		"cookie":"lib/jquery_plugins/jquery.cookie",
		"loop":"js/jquery.xmCarousel",
		"temp":"lib/arttemplate/template"
	},
	shim : {
		"loop" : {
			deps : ["jquery"]
		}
		
	}
	
	
})
