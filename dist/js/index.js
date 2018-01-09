"use strict";

require(["config"], function () {
	require(["lode", "loop"], function () {
		$.cookie.json = true;

		//轮播图的设置
		$(".loop").eq(0).carousel({
			imgs: [{ src: "img/loop.jpg", href: "#" }, { src: "img/loop1.jpg", href: "#" }, { src: "img/loop2.jpg", href: "#" }],
			width: 1262,
			height: 630,
			type: "fade",
			duration: 5000
		});
		//
		$.ajax({
			type: 'get',
			url: 'mock/index_ajax_noe.json',
			dataType: "json",
			success: function success(data) {
				var html = "";

				$.each(data.res_body.data, function (index, elements) {
					html += "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t<div style=\"display:none;\">" + elements.id + "</div>\n\t\t\t\t\t\t<img src=\"" + elements.img + "\"/>\n\t\t\t\t\t\t\t<p>" + elements.title + "</p>\n\t\t\t\t\t\t\t<h6>" + elements.more + "</h6>\n\t\t\t\t\t\t\t<div class=\"tag_list\">\n\t\t\t\t\t\t\t<a href=\"#\">" + elements.tag[0] + "</a>\n\t\t\t\t\t\t\t<a href=\"#\">" + elements.tag[1] + "</a>\n\t\t\t\t\t\t\t<a href=\"#\">" + (elements.tag[2] || "more") + "</a>\n\t\t\t\t\t\t\t<a href=\"/html/detail.html\">" + (elements.tag[3] || "more") + "</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"hr\"></div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"peice\">\n\t\t\t\t\t\t\t\t<span>" + elements.price + "/2.0\u78C5</span>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"add_cart\">\u52A0\u5165\u8D2D\u7269\u8F66</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>";
				});
				$(".lis").html(html);
			}

		});

		// 异步加载模拟的假数据
		$.ajax({
			type: 'get',
			url: 'mock/index_ajax_two.json',
			dataType: "json",
			success: function success(data) {
				var html = "";

				$.each(data.res_body.data, function (index, elements) {
					html += "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t<div style=\"display:none;\">" + elements.id + "</div>\n\t\t\t\t\t\t<img src=\"" + elements.img + "\"/>\n\t\t\t\t\t\t\t<p>" + elements.title + "</p>\n\t\t\t\t\t\t\t<h6>" + elements.more + "</h6>\n\t\t\t\t\t\t\t<div class=\"tag_list\">\n\t\t\t\t\t\t\t<a href=\"#\">" + elements.tag[0] + "</a>\n\t\t\t\t\t\t\t<a href=\"#\">" + elements.tag[1] + "</a>\n\t\t\t\t\t\t\t<a href=\"#\">" + (elements.tag[2] || "more") + "</a>\n\t\t\t\t\t\t\t<a href=\"#\">" + (elements.tag[3] || "more") + "</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"hr\"></div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"peice\">\n\t\t\t\t\t\t\t\t<span>" + elements.price + "/2.0\u78C5</span>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"add_cart\">\u52A0\u5165\u8D2D\u7269\u8F66</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>";
				});
				$(".lis2").html(html);
			}

		});
	});
});

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