$(function() {

	
	
	$(window).scroll(function() {
		var st = $(this).scrollTop();
			$(".top_text").css({
				"transform" : "translate3d(0px, " + st  + "%, .01px)",
				"-webkit-transform" : "translate3d(0px, " + st + "%, .01px)"
		  	});
	});
	

	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
	
	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".pd").animated("fadeInUp", "fadeOutDown");
	$(".pd").animated("fadeInUp", "fadeOutDown");
	$(".wrImg").animated("fadeInUp", "fadeOutDown");
	$(".txt").animated("fadeInUp", "fadeOutDown");
	//$(".item_vertical").animated("fadeInUp", "fadeOutDown");
	
	//dinamic resize windows
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});
	
	$(".top_mnu ul a").mPageScroll2id();
	
	
	
	$(window).load(function () {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});

});
