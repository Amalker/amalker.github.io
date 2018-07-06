$(function() {

	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu")
	.parent().mmenu({
		extensions : [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		offCanvas: {
			position: 'right'
		},
		navbar: {
			title: "Меню"
		}
	});



		
	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
	});

	var api = $("#mobile-menu").data("mmenu");
	api.bind("close:finish", function () {
		$(".toggle-mnu").removeClass("on"); 
	});



var owl = $('.slider');
		owl.owlCarousel({
			loop: true,
			items: 1,
			itemClass: "slide-wrap",
			nav: true,
			navText: "",
			autoplay: true,
			autoplaySpeed: 1500,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,			
			dotsSpeed: 4000,
			dragEndSpeed: 2500

		});
		// Go to the next item
		$('.next').click(function() {
		    owl.trigger('next.owl.carousel', [1200]);
		})
		// Go to the previous item
		$('.prev').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [1200]);
		})



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
