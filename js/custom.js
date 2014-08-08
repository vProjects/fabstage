
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
	$('#play-btn').click(function(){
		$('#play-btn').fadeOut();
		$('#pause-btn').fadeIn();
	});
	
	$('#pause-btn').click(function(){
		$('#pause-btn').fadeOut();
		$('#play-btn').fadeIn();
	});
	
	$('.carousel').carousel({
	  interval: 10000
	});
	
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
	
	/*
	 * assigning relative position instead of fixed position of video 
	 */
	
	// get window position from top while scrolling
	var wPos = $(window).scrollTop(); 
	
	//get end position of banner from Top
	var banner = $('.banner').offset().top + $('.banner').height();
	//check if the banner with the background video is scrolled up out of the view and change the css of the video
	if (wPos >= banner) {
		$('#wrapper_mbYTP_bgndVideo').css("position","relative");
	}
	else 
	{
		$('#wrapper_mbYTP_bgndVideo').css("position","fixed");
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