"use strict";require(["config"],function(){require(["lode","loop"],function(){$(".loop").eq(0).carousel({imgs:[{src:"img/loop.jpg",href:"#"},{src:"img/loop1.jpg",href:"#"},{src:"img/loop2.jpg",href:"#"}],width:1262,height:630,type:"fade",duration:5e3}),$.ajax({type:"get",url:"mock/index_ajax_noe.json",dataType:"json",success:function(t){var n="";$.each(t.res_body.data,function(t,a){n+='\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t<div style="display:none;">'+a.id+'</div>\n\t\t\t\t\t\t<img src="'+a.img+'"/>\n\t\t\t\t\t\t\t<p>'+a.title+"</p>\n\t\t\t\t\t\t\t<h6>"+a.more+'</h6>\n\t\t\t\t\t\t\t<div class="tag_list">\n\t\t\t\t\t\t\t<a href="#">'+a.tag[0]+'</a>\n\t\t\t\t\t\t\t<a href="#">'+a.tag[1]+'</a>\n\t\t\t\t\t\t\t<a href="#">'+(a.tag[2]||"more")+'</a>\n\t\t\t\t\t\t\t<a href="#">'+(a.tag[3]||"more")+'</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="hr"></div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="peice">\n\t\t\t\t\t\t\t\t<span>'+a.price+'/2.0磅</span>\n\t\t\t\t\t\t\t\t<button type="button" class="add_cart">加入购物车</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>'}),$(".lis").html(n)}}),$.ajax({type:"get",url:"mock/index_ajax_two.json",dataType:"json",success:function(t){var n="";$.each(t.res_body.data,function(t,a){n+='\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t<div style="display:none;">'+a.id+'</div>\n\t\t\t\t\t\t<img src="'+a.img+'"/>\n\t\t\t\t\t\t\t<p>'+a.title+"</p>\n\t\t\t\t\t\t\t<h6>"+a.more+'</h6>\n\t\t\t\t\t\t\t<div class="tag_list">\n\t\t\t\t\t\t\t<a href="#">'+a.tag[0]+'</a>\n\t\t\t\t\t\t\t<a href="#">'+a.tag[1]+'</a>\n\t\t\t\t\t\t\t<a href="#">'+(a.tag[2]||"more")+'</a>\n\t\t\t\t\t\t\t<a href="#">'+(a.tag[3]||"more")+'</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="hr"></div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="peice">\n\t\t\t\t\t\t\t\t<span>'+a.price+'/2.0磅</span>\n\t\t\t\t\t\t\t\t<button type="button" class="add_cart">加入购物车</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>'}),$(".lis2").html(n)}})})});