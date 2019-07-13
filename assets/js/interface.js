( function($) {
  'use strict';
$(function(e) {

/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=80
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
		});
	$('.navbar-nav a.js-target-scroll ').on('click',function(){
	  if($('#navigation').removeClass('in')) {
	  }
	  });	
	  
/*-------------------------------------------------------------------------------
	  Sticky-Header
	-------------------------------------------------------------------------------*/
$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

/*-------------------------------------------------------------------------------
	  Video
	-------------------------------------------------------------------------------*/
$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
/*------------------------------------------------------------------
	PrettyPhoto
	-------------------------------------------------------------------*/
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	  });
	
/*------------------------------------------------------------------
	Intro-Slider
	-------------------------------------------------------------------*/
	$('#intro .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:true,
	animateOut: 'fadeOut',
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	})

/*------------------------------------------------------------------
	Testimonials-Slider
	-------------------------------------------------------------------*/
	$('#testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:2}
    }
	})
	  
/*------------------------------------------------------------------
	Testimonials-Slider 2
	-------------------------------------------------------------------*/
	$('#testimonials-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	})
	
/*------------------------------------------------------------------
	Screenshot-Slider
	-------------------------------------------------------------------*/
	$('#screenshot .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:3}
    }
	})
			
/*------------------------------------------------------------------
	back to top
	-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();
	 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		});
		
})(jQuery);