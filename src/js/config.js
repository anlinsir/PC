require.config({
	baseUrl :"/",
	paths:{
		"jquery":"lib/jquery/jquery-1.12.4.min",
		"lode":"js/headerfootertools",
		"fly" : "lib/jquery_plugins/jquery.fly.min",
		"cookie":"lib/jquery_plugins/jquery.cookie",
		"loop":"js/jquery.xmCarousel",
		"temp":"lib/arttemplate/template"
	},
	shim : {
		"loop" : {
			deps : ["jquery"]
		},
		"cookie" : {
			deps : ["jquery"]
		},
		"fly" :{
			deps :   ["jquery"]
		}
		
	}
	
	
})
