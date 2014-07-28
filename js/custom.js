$(window).load(function(){
	var vdheight = $("#bgvid").height();
	$(".banner").css("height", vdheight);
});

$(document).ready(function(){
	
	$(".effctimg").hover(function(){
		$(this).children('.txt-container').slideToggle("slow");
	});
	
	$(".img-flip").hover(function(){
		$(this).children('.txt-flip').slideToggle("slow");
	});

});
