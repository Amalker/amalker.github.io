$(function() {	

	$('.nav-wrap a').mPageScroll2id({
		offset: 3
	});

	
// Inline popups
$('#inline-popups').magnificPopup({
	delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
  	beforeOpen: function() {
  		this.st.mainClass = this.st.el.attr('data-effect');
  	}
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

$('.partners').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,	
	autoplay: true,
	autoplaySpeed: 1500,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,			
	dotsSpeed: 4000,
	dragEndSpeed: 2500,	
	responsive: {
		0: {
			items: 2
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});	

$('.image-popup').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 800 // don't foget to change the duration also in CSS
		}
	});


$("select").selectize();


//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});


	$('a[href="#callback"]').magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 800,
		type: 'inline',
		mainClass: 'my-mfp-zoom-in'
	});



	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-call .h3").text(dataText);
		$(".form-call [name=admin-data]").val(dataForm);
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});





});
