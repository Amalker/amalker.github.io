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



		$(document).ready(function(){
			var typed = new Typed(".typed", {
  
  strings: ['Наша миссия - качественний продукт', 'Проектирование металлоконструкций', 'Км, Кмд и фундамент', 'steel constru', 'steel beam'],
  stringsElement: null,
  
  typeSpeed: 100,
  
  //@property {number} startDelay time before typing starts in milliseconds
   
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 11,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html',

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
	});
		
		$('.typed-cursor').delay(20500).queue(function(next) {
			$(this).addClass('hidden');
			next();
		})

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
			autoplaySpeed: 2000,
			autoplayTimeout: 4000,
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


function heightses() {
		$(".s-direct .item-vertical p").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});
	heightses();

	

function heightses() {
		$(".s-dir .item-vertical p").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});
	heightses();



	
	$(".s-adv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});

	

});
