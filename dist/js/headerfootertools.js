"use strict";define(["jquery","cookie","index"],function(e){e.ajax("html/include/header.html").done(function(i){e("header").html(i)}).done(function(){var i=e.cookie("loginuser");i&&(e(".loginuser").html("<a href='/PC/src/html/car.html'>"+i+"</a>"),e(".register").hide())}),e.ajax("html/include/footer.html").done(function(i){e("footer").html(i)}).done(function(){e(".footer-img li:nth-child(3) a").mouseenter(function(){e(".footer-img li:nth-child(3) img").fadeIn(500)}),e(".footer-img li:nth-child(3)").mouseleave(function(){e(".footer-img li:nth-child(3) img").fadeOut(500)})})});