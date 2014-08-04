
$(document).ready(function(){
// 	
	// $(".effctimg").hover(function(){
		// $(this).children('.txt-container').slideToggle("slow");
	// });
// // 	
	// $(".img-flip").hover(function(){
		// $(this).children('.txt-flip').slideToggle("slow");
	// });
// 	
	skrollr.init();
	
});

$(window).scroll(function(){
	
	if ($(window).scrollTop() > 150) 
	{
		$('.nav-custom').addClass('navcustomht');
	}
	else 
	{
		$('.nav-custom').removeClass('navcustomht');
	}
	
	
	
});

$(function(){
        $.okvideo({ source: 'https://www.youtube.com/watch?v=pRCelvhci7A', 
                    volume: 100, 
                    loop: true,
                    hd:true, 
                    adproof: true,
		   // disablekeyControl: true;
                    annotations: false,
                    onFinished: function() { console.log('finished') },
                    unstarted: function() { console.log('unstarted') },
                    onReady: function() { console.log('onready') },
                    onPlay: function() { console.log('onplay') },
                    onPause: function() { console.log('pause') },
                    buffering: function() { console.log('buffering') },
                    cued: function() { console.log('cued') },
                 });
                 
       $('.banner').css({
            height: $(window).height()
        });
                 
    });