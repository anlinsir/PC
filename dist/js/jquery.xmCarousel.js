"use strict";

;
(function ($) {
	function Carousel(_ref) {
		var imgs = _ref.imgs,
		    width = _ref.width,
		    height = _ref.height,
		    type = _ref.type,
		    duration = _ref.duration,
		    isAutoPlay = _ref.isAutoPlay;

		this.imgs = imgs;
		this.len = imgs.length;
		this.width = width;
		this.height = height;
		this.type = type; // 轮播方式：fade-淡入淡出  slide-左右滑动
		this.duration = duration; // 轮播切换时间
		this.container = null; // 轮播容器
		this.ul = null; // 轮播图片LI的父盒子
		this.lis = null; // 所有待轮播的图片盒子
		this.circles = null;
		this.prev = null;
		this.next = null;
		this.currentIndex = 0; // 当前显示图片的索引
		this.nextIndex = 1; // 即将显示图片的索引
		this.isAutoPlay = isAutoPlay || true; // 是否自动轮播
	}

	Carousel.prototype = {
		constructor: Carousel,
		/** 初始化DOM结构
   * @param container 放置布局DOM结构的父容器
   */
		init: function init(container) {
			// 动态创建HTML结构
			var html = "<div class=\"xm_carousel_container\">\n\t\t\t\t\t<ul class=\"imgs\">";
			// 串连轮播的图片布局
			for (var i = 0; i < this.len; i++) {
				html += "<li><a href=\"" + this.imgs[i].href + "\"><img src=\"" + this.imgs[i].src + "\"></a></li>";
			}

			html += "</ul>\n\t\t\t\t\t<div class=\"pages\"></div>\n\t\t\t\t\t<div class=\"prev\">&lt;</div>\n\t\t\t\t\t<div class=\"next\">&gt;</div>\n\t\t\t\t</div>";
			// 页面渲染HTML
			$(container).html(html);

			// 设置各元素CSS样式
			this.container = $(".xm_carousel_container", container).css({
				width: this.width,
				height: this.height,
				overflow: "hidden"
			});
			// ul样式设置
			this.ul = $(".imgs", container).css({
				width: this.type === "fade" ? this.width : this.width * this.len,
				height: this.height,
				position: this.type === "fade" ? "relative" : "absolute"
			});
			// 所有 li 样式设置
			this.lis = $(".imgs li", container).css({
				width: this.width,
				height: this.height
			});
			if (this.type === "fade") {
				this.lis.css({
					position: "absolute",
					top: 0,
					left: 0,
					display: "none"
				}).first().show();
			} else {
				this.lis.css({
					float: "left"
				});
			}
			// 所有小圆点
			var html = "";
			for (var i = 0; i < this.len; i++) {
				html += "<i></i>";
			}
			this.circles = $(".pages", container).css({
				width: this.width
			}).html(html).children("i");
			this.circles.first().addClass("current");

			this.prev = $(".prev", container);
			this.next = $(".next", container);

			// 判断，调用自动轮播方法
			if (this.isAutoPlay) this.autoPlay();
			// 注册事件监听
			this.registerEventListener();
		},
		/**
   * 自动轮播
   */
		autoPlay: function autoPlay() {
			var _this = this;

			this.timer = setInterval(function () {
				_this.move();
			}, this.duration);
		},
		/** 
   * 切换
   */
		move: function move() {
			if (this.type === "fade") {
				this.fade();
			} else {
				this.slide();
			}
		},
		/** 
   * 淡入淡出
   */
		fade: function fade() {
			// 当前正显示的图片淡出，即将显示的图片淡入
			this.lis.eq(this.currentIndex).fadeOut(2000);
			this.lis.eq(this.nextIndex).fadeIn(2000);
			// 小圆点样式切换
			this.circles.eq(this.currentIndex).removeClass("current");
			this.circles.eq(this.nextIndex).addClass("current");
			// 索引切换
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if (this.nextIndex >= this.len) this.nextIndex = 0;
		},
		/** 
   * 滑动
   */
		slide: function slide() {
			// 计算滑动定位位置
			var _left = -1 * this.width * this.nextIndex;
			// 运动动画
			this.ul.stop().animate({ left: _left });
			// 小圆点样式切换
			this.circles.eq(this.currentIndex).removeClass("current");
			this.circles.eq(this.nextIndex).addClass("current");
			// 索引切换
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if (this.nextIndex >= this.len) this.nextIndex = 0;
		},
		/**
   * 注册事件监听
   */
		registerEventListener: function registerEventListener() {
			var _this2 = this;

			// 鼠标移入/出容器
			this.container.hover(function () {
				// mouseenter
				$(".prev,.next").fadeIn(500);
				clearInterval(_this2.timer);
			}, function () {
				// mouseleave
				$(".prev,.next").fadeOut(500);

				_this2.timer = setInterval(function () {

					_this2.move();
				}, _this2.duration);
			});
			// 小圆点移入
			var that = this;
			this.circles.mouseover(function () {
				var index = $(this).index();
				if (that.currentIndex === index) return;
				that.nextIndex = index;
				that.move();
			});
			// 向前/后
			this.prev.click(function () {
				_this2.nextIndex = _this2.currentIndex - 1;
				if (_this2.nextIndex < 0) _this2.nextIndex = _this2.len - 1;
				_this2.move();
			});
			this.next.click(function () {
				_this2.move();
			});
		}
	};

	// 向 jQuery 原型中添加扩展方法
	// 即该方法可以通过 jQuery 对象的实例来调用   $()
	$.fn.extend({
		carousel: function carousel(options) {
			this.each(function (index, element) {
				new Carousel(options).init($(element));
			});
		}
	});
	// $(".box").carousel();

	// // 向jQuery函数对象本身中添加扩展方法
	// // 即该方法的调用可以使用 jQuery 直接调用
	// $.extend({
	// 	max : function(array){
	// 		return Math.max.apply(null, array);
	// 	}
	// });
	// $.max([3, 7, 9, 2, 5]);
})(jQuery);