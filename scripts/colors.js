$(document).ready(function(){
	$("#normal").click(function(){
		$(".exposition").css({"background-color": "#D5D8DC", "color": "black"});
		$(".a, .b").css({"background-color": "white", "color": "black"});
		$(".contact").css({"background-color": "#E5E8E8", "color": "black"});
		$(".nav, .footer").css({"color": "white", "background-color": "#333"});
		$(".nav a").css({"color": "white"});
	});
	$("#contraste").click(function(){
		$(".exposition, .a, .b, .contact").css({"background-color": "yellow", "color": "black"});
		$(".nav, .footer").css({"color": "yellow", "background-color": "black"});
		$(".nav a").css({"color": "yellow"});
	});
  
	$("#noche").click(function(){
		$(".exposition, .a, .b, .contact").css({"background-color": "#393939", "color": "white"});
		$(".nav, .footer").css({"color": "white", "background-color": "#333"});
		$(".nav a").css({"color": "white"});
	});
});