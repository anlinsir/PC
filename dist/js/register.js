"use strict";require(["config"],function(){require(["lode"],function(){$(".btn").click(function(){var e="http://10.7.187.127/PC/pc.php?username="+$(".username").val()+"&password="+$(".password").val()+"&email="+$(".email").val()+"&phone="+$(".phone").val();$.ajax({url:e,type:"GET",datatype:"json",success:function(e){console.log(e)}})})})});