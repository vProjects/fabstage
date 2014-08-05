
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
	
	// play and pause functionality for youtube video 

});

$(window).scroll(function(){
	
	if ($(window).scrollTop() > 150) 
	{
		$('.nav-custom').addClass('navcustomht');
		$('.navbar-brand img').css('margin-top','-6px');
	}
	else 
	{
		$('.nav-custom').removeClass('navcustomht');
		$('.navbar-brand img').css('margin-top','0px');
	}
	
});

$(function(){
        // $.okvideo({ source: 'EpbjEttizy8', 
                    // volume: 100, 
                    // loop: true,
                    // hd:true, 
                    // adproof: true,
                    // autoplay: false,
		   			// // disablekeyControl: true;
                    // annotations: false,
                    // onFinished: function() { console.log('finished') },
                    // unstarted: function() { console.log('unstarted') },
                    // onReady: function() { console.log('onready') },
                    // onPlay: function() { console.log('onplay') },
                    // onPause: function() { console.log('pause') },
                    // buffering: function() { console.log('buffering') },
                    // cued: function() { console.log('cued') },
                 // });
                 
       $('.banner').css({
            height: $(window).height()
        });
                 
    });

jQuery(function(){

            //debug functions
            jQuery("#bgndVideo").on("YTPStart", function(){
                jQuery("#eventListener").html("YTPStart");
                jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
                jQuery("#eventListener").append(" :: (quality= "+ jQuery("#bgndVideo").getPlayer().getPlaybackQuality()+")");
            });
            jQuery("#bgndVideo").on("YTPLoop", function(e){
                jQuery("#eventListener").html("YTPLoop");
                jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
                jQuery("#eventListener").append(" :: "+ e.counter);
            });
            jQuery("#bgndVideo").on("YTPEnd", function(){
                jQuery("#eventListener").html("YTPEnd");
                jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
                console.debug("YTPEnd")
            });
            jQuery("#bgndVideo").on("YTPPause", function(){
                jQuery("#eventListener").html("YTPPause");
                jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
            });
            jQuery("#bgndVideo").on("YTPBuffering", function(){
                jQuery("#eventListener").html("YTPBuffering");
                jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
            });

            jQuery(".player").mb_YTPlayer({
                onReady: function(){
                    jQuery("#eventListener").append(" (Player is ready)");
                }
            });
		});

        var v = false;
        function changeVideo(){
            var vID = v ? "7SnmCUwOsts" : "BsekcY04xvQ";
            jQuery('#bgndVideo').changeMovie({videoURL:vID});
            $("#vidData").toggle(1000);
            v = !v;
        }