$(function(){var e=$(window),t=$("html"),n=$("body"),i=$("body, html");String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},setTimeout(function(){n.addClass("docready")},250);var o=[],a="";if($(".submenutext").each(function(e){var t=$(this).parent(),n=t.attr("id")||"h"+e;t.attr("id",n),o.push("#"+n),a+='<li><a href="#'+n+'">'+$(this).text().capitalize()+"</a></li>"}),a.length){o=o.reverse();var r=$("h1").first().addClass("has-submenu"),s=$('<div class="submenu"><div><ul>'+a+"</ul></div></div>").insertAfter(r);s.offset().top;s.find("a").each(function(){var e=$(this).attr("href");n.find('a[href="'+e+'"]').on("click",function(t){t.preventDefault(),i.animate({scrollTop:$(e).offset().top-120})})});var l=-1,f=s.find("li");e.on("scroll.submenu",function(t){for(var n=e.scrollTop(),i=0;i<o.length;i++)if($(o[i]).offset().top<n+160){l!==i&&(l=i,f.removeClass("selected").find('[href="'+o[i]+'"]').parent().addClass("selected"));break}}),e.trigger("scroll.submenu")}if($.fn.mmenu){var c=$("#menu").mmenu({extensions:{all:["theme-white","fx-menu-slide","pagedim-black"],"(min-width: 1430px)":["widescreen"]},counters:!0,dividers:{fixed:!0},navbar:{title:"mmenu"},navbars:[{position:"top",content:["searchfield"]},{position:"top"},{position:"bottom",content:['<div>Hosted by <a href="https://www.byte.nl/" target="_blank">Byte</a></div>']}],searchfield:{resultsPanel:!0},setSelected:{parent:!0}},{searchfield:{clear:!0}}).data("mmenu"),
	
	var c=$("#my-menu"),
	  	e=$(window);

	d=$("#hamburger").on("click",function(e){e.preventDefault(),$("html").hasClass("mm-opened")?c.close():c.open()}).children(".hamburger");
	
	c.bind("close:finish",function(){setTimeout(function(){d.removeClass("is-active")},100)}),c.bind("open:finish",function(){setTimeout(function(){d.addClass("is-active")},100)})}


	$("a.rotate").on("click",function(e){e.preventDefault(),$(this).parent().toggleClass("portrait")}),function(){var e=$(".download-button");e.find("a").on("click.dl",function(t){t.preventDefault(),e.addClass("downloading");var n=$(this).attr("data-form"),i=$(this).attr("href");n?document[n].submit():window.location.href=i,setTimeout(function(){window.location.href=window.location.href},3e3)})}(),setTimeout(function(){var e="frebsite.nl",t="info",n="mailto";$("#emaillink").attr("href",n+":"+t+"@"+e)},2e3);var u=$(".phone, .tablets");if(u.length){var h={};u.each(function(){var e=$(this).offset().top-150;e<0&&(e=0),h[e]||(h[e]=$()),h[e]=h[e].add(this)}),e.on("scroll.phones",function(){var t=e.scrollTop();for(var n in h)t>n&&(h[n].each(function(e){var t=$(this).find("iframe"),n=0;if(t.length){t=t[0].contentWindow;var i=setInterval(function(){if(t.$){var e=t.$("#menu").data("mmenu");e&&(e.open&&e.open(),clearInterval(i))}n++,n>50&&clearInterval(i)},250+250*e)}}),delete h[n]);for(var n in h)return;$(this).off("scroll.phones")}),setTimeout(function(){e.trigger("scroll.phones")},2500)}});