/***************************************************
==================== JS INDEX ======================
****************************************************
// 00. PreLoader
// 02. Mobile Menu
// 03. Sidebar
// 04. Sticky Header Js
// 05. Data Background
// 06. Nice Select
// 07. settings append in body
// 08. settings open btn
// 09. Mouse Custom Cursor
// 10. rtl & color setting 
// 11. slider__active Js
// 12. Masonary Js
// 13. magnificPopup js 
// 14. Wow Js
// 15. InHover Active Js
// 16. testimonial-activation
// 17. op-gallery-activation
// 18. service-slider activation
// 19. brand-active activation
// 20. blog-slide activation
// 21. team activation
// 22. testimonial activation
// 23. video activation
// 24. pricing activation
// 25. Services Details Circle Js 
// 26. Active Odometer Counter 
// 27. video play 
// 28. load more btn 

****************************************************/

(function($) {
	"use strict"

	var windowOn = $(window);
	
	// 00. PreLoader
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);

			if ($('#ctn-preloader').hasClass('loaded')) {
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();
	
	// 02. Mobile Menu
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
		meanContract: ['<i class="fal fa-minus"></i>'],
	});
	$("#mobile-menu-media-all").meanmenu({
		meanMenuContainer: ".mobile-menu-media-all",
		meanScreenWidth: "8000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
		meanContract: ['<i class="fal fa-minus"></i>'],
	});

	// 03. Sidebar
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	// 04. Sticky Header Js
	var lastScrollTop = 200;
	$(window).scroll(function(event){
	  var scroll = $(this).scrollTop();
	  if (scroll > lastScrollTop){
		$('#header-sticky').removeClass('sticky');
	  }else {
		$('#header-sticky').addClass('sticky');
	  }
  
	  if (scroll < 200) {
		$("#header-sticky").removeClass("sticky");
	  }
	  lastScrollTop = scroll;
	});	

	// 05. Data Background
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});

	// 06. Nice Select
	$("select").niceSelect();

	// side - info
	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	$(".offset-btn").on("click",function(){
		$(".offset-content-wrapper").addClass("offset-show");
	});
	$(".offset-content-close").on("click",function(){
		$(".offset-content-wrapper").removeClass("offset-show");
	});

	// service hover Js
	$(".single-service").on("mouseenter", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	// 07. settings append in body
	function tp_settings_append($x) {
	var settings = $("body");
	let dark;
	$x == true ? (dark = "d-block") : (dark = "d-none");
	var settings_html = `<div class="bd-theme-settings-area transition-3">
		<div class="bd-theme-wrapper">
			<div class="bd-theme-header text-center">
				<h4 class="bd-theme-header-title">Theme Settings</h4>
			</div>

			<!-- THEME TOGGLER -->
			<div class="bd-theme-toggle mb-20 ${dark}" style="display:none">
				<label class="bd-theme-toggle-main" for="bd-theme-toggler">
					<span class="bd-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="bd-theme-toggler">
					<i class="bd-theme-toggle-slide"></i>
					<span class="bd-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
				</label>
			</div>

			<!--  RTL SETTINGS -->
			<div class="bd-theme-dir mb-20">
				<label class="bd-theme-dir-main" for="bd-dir-toggler">
					<span class="bd-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="bd-dir-toggler">
					<i class="bd-theme-dir-slide"></i>
					<span class="bd-theme-dir-ltr active"> LTR</span>
				</label>
			</div>

			<!-- COLOR SETTINGS -->
			<div class="bd-theme-settings">
				<div class="bd-theme-settings-wrapper">
					<div class="bd-theme-settings-open">
					<button class="bd-theme-settings-open-btn">
						<span class="bd-theme-settings-gear">
							<i class="fal fa-cog"></i>
						</span>
						<span class="bd-theme-settings-close">
							<i class="fal fa-times"></i>
						</span>
					</button>
					</div>
					<div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
						<div class="bd-theme-color-item bd-color-active">
						<button class="bd-theme-color-btn bd-color-settings-btn d-none" data-color-default="#ffaf00" type="button" data-color="#ffaf00"></button>
							<button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#ffaf00"></button>
						</div>
					</div>
					<div class="col">
						<div class="bd-theme-color-item bd-color-active">
							<button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#92942e"></button>
						</div>
					</div>
					<div class="col">
						<div class="bd-theme-color-item bd-color-active">
							<button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#8098ff"></button>
						</div>
					</div>
					<div class="col">
						<div class="bd-theme-color-item bd-color-active">
							<button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#f46100"></button>
						</div>
					</div>
					</div>
				</div>
				<div class="bd-theme-color-input">
					<h6>Choose Custom Color</h6>
					<input type="color" id="bd-color-setings-input" value="#0b3d2c">
					<label id="bd-theme-color-label" for="bd-color-setings-input"></label>
				</div>
			</div>
		</div>
		</div>`;

	settings.append(settings_html);
	}
	tp_settings_append(false); // if want to enable dark light mode then send "true";

	// 08. settings open btn
	$(".bd-theme-settings-open-btn").on("click", function () {
	$(".bd-theme-settings-area").toggleClass("settings-opened");
	});

	// 09. Mouse Custom Cursor
	function itCursor() {
	var myCursor = jQuery(".mouseCursor");
	if (myCursor.length) {
		if ($("body")) {
		const e = document.querySelector(".cursor-inner"),
			t = document.querySelector(".cursor-outer");
		let n,
			i = 0,
			o = !1;
		(window.onmousemove = function (s) {
			o ||
			(t.style.transform =
				"translate(" + s.clientX + "px, " + s.clientY + "px)"),
			(e.style.transform =
				"translate(" + s.clientX + "px, " + s.clientY + "px)"),
			(n = s.clientY),
			(i = s.clientX);
		}),
			$("body").on("mouseenter", "button, a, .cursor-pointer", function () {
			e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
			}),
			$("body").on("mouseleave", "button, a, .cursor-pointer", function () {
			($(this).is("a", "button") &&
				$(this).closest(".cursor-pointer").length) ||
				(e.classList.remove("cursor-hover"),
				t.classList.remove("cursor-hover"));
			}),
			(e.style.visibility = "visible"),
			(t.style.visibility = "visible");
		}
	}
	}
	itCursor();

	$(".slider-drag").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});
	$(".slider-drag").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	// 10. rtl & color setting 
	// rtl settings
	function tp_rtl_settings() {
	$("#bd-dir-toggler").on("change", function () {
		toggle_rtl();
		window.location.reload();
	});

	// set toggle theme scheme
	function tp_set_scheme(tp_dir) {
		localStorage.setItem("tp_dir", tp_dir);
		document.documentElement.setAttribute("dir", tp_dir);

		if (tp_dir === "rtl") {
		var list = $("[href='assets/css/bootstrap.css']");
		$(list).attr("href", "assets/css/bootstrap.rtl.css");
		} else {
		var list = $("[href='assets/css/bootstrap.css']");
		$(list).attr("href", "assets/css/bootstrap.css");
		}
	}

	// toogle theme scheme
	function toggle_rtl() {
		if (localStorage.getItem("tp_dir") === "rtl") {
		tp_set_scheme("ltr");
		var list = $("[href='assets/css/bootstrap.rtl.css']");
		$(list).attr("href", "assets/css/bootstrap.css");
		} else {
		tp_set_scheme("rtl");
		var list = $("[href='assets/css/bootstrap.css']");
		$(list).attr("href", "assets/css/bootstrap.rtl.css");
		}
	}

	// set the first theme scheme
	function tp_init_dir() {
		if (localStorage.getItem("tp_dir") === "rtl") {
		tp_set_scheme("rtl");
		var list = $("[href='assets/css/bootstrap.css']");
		$(list).attr("href", "assets/css/bootstrap.rtl.css");
		document.getElementById("bd-dir-toggler").checked = true;
		} else {
		tp_set_scheme("ltr");
		document.getElementById("bd-dir-toggler").checked = false;
		var list = $("[href='assets/css/bootstrap.css']");
		$(list).attr("href", "assets/css/bootstrap.css");
		}
	}
	tp_init_dir();
	}
	if ($("#bd-dir-toggler").length > 0) {
	tp_rtl_settings();
	}

	var tp_rtl = localStorage.getItem("tp_dir");
	let rtl_setting = tp_rtl == "rtl" ? true : false;

	// dark light mode toggler
	function tp_theme_toggler() {
	$("#bd-theme-toggler").on("change", function () {
		toggleTheme();
	});

	// set toggle theme scheme
	function tp_set_scheme(tp_theme) {
		localStorage.setItem("tp_theme_scheme", tp_theme);
		document.documentElement.setAttribute("bd-theme", tp_theme);
	}

	// toogle theme scheme
	function toggleTheme() {
		if (localStorage.getItem("tp_theme_scheme") === "bd-theme-dark") {
		tp_set_scheme("bd-theme-light");
		} else {
		tp_set_scheme("bd-theme-dark");
		}
	}

	// set the first theme scheme
	function tp_init_theme() {
		if (localStorage.getItem("tp_theme_scheme") === "bd-theme-dark") {
		tp_set_scheme("bd-theme-dark");
		document.getElementById("bd-theme-toggler").checked = true;
		} else {
		tp_set_scheme("bd-theme-light");
		document.getElementById("bd-theme-toggler").checked = false;
		}
	}
	tp_init_theme();
	}
	if ($("#bd-theme-toggler").length > 0) {
	tp_theme_toggler();
	}

	// color settings
	function tp_color_settings() {
	// set color scheme
	function tp_set_color(tp_color_scheme) {
		localStorage.setItem("tp_color_scheme", tp_color_scheme);
		document
		.querySelector(":root")
		.style.setProperty("--clr-theme-2", tp_color_scheme);
		document.getElementById("bd-color-setings-input").value = tp_color_scheme;
		document.getElementById("bd-theme-color-label").style.backgroundColor =
		tp_color_scheme;
	}

	// set color
	function tp_set_input() {
		var color = localStorage.getItem("tp_color_scheme");
		document.getElementById("bd-color-setings-input").value = color;
		document.getElementById("bd-theme-color-label").style.backgroundColor =
		color;
	}
	tp_set_input();

	function tp_init_color() {
		var defaultColor = $(".bd-color-settings-btn").attr("data-color-default");
		var setColor = localStorage.getItem("tp_color_scheme");

		if (setColor != null) {
		} else {
		setColor = defaultColor;
		}

		if (defaultColor !== setColor) {
		document
			.querySelector(":root")
			.style.setProperty("--clr-theme-2", setColor);
		document.getElementById("bd-color-setings-input").value = setColor;
		document.getElementById("bd-theme-color-label").style.backgroundColor =
			setColor;
		tp_set_color(setColor);
		} else {
		document
			.querySelector(":root")
			.style.setProperty("--clr-theme-2", defaultColor);
		document.getElementById("bd-color-setings-input").value = defaultColor;
		document.getElementById("bd-theme-color-label").style.backgroundColor =
			defaultColor;
		tp_set_color(defaultColor);
		}
	}
	tp_init_color();

	let themeButtons = document.querySelectorAll(".bd-color-settings-btn");

	themeButtons.forEach((color) => {
		color.addEventListener("click", () => {
		let datacolor = color.getAttribute("data-color");
		document
			.querySelector(":root")
			.style.setProperty("--clr-theme-2", datacolor);
		document.getElementById("bd-theme-color-label").style.backgroundColor =
			datacolor;
		tp_set_color(datacolor);
		});
	});

	const colorInput = document.querySelector("#bd-color-setings-input");
	const colorVariable = "--clr-theme-2";

	colorInput.addEventListener("change", function (e) {
		var clr = e.target.value;
		document.documentElement.style.setProperty(colorVariable, clr);
		tp_set_color(clr);
		tp_set_check(clr);
	});

	function tp_set_check(clr) {
		const arr = Array.from(document.querySelectorAll("[data-color]"));

		var a = localStorage.getItem("tp_color_scheme");

		let test = arr
		.map((color) => {
			let datacolor = color.getAttribute("data-color");

			return datacolor;
		})
		.filter((color) => color == a);

		var arrLength = test.length;

		if (arrLength == 0) {
		$(".bd-color-active").removeClass("active");
		} else {
		$(".bd-color-active").addClass("active");
		}
	}

	function tp_check_color() {
		var a = localStorage.getItem("tp_color_scheme");

		var list = $(`[data-color="${a}"]`);

		list
		.parent()
		.addClass("active")
		.parent()
		.siblings()
		.find(".bd-color-active")
		.removeClass("active");
	}
	tp_check_color();

	$(".bd-color-active").on("click", function () {
		$(this)
		.addClass("active")
		.parent()
		.siblings()
		.find(".bd-color-active")
		.removeClass("active");
	});
	}
	if (
		$(".bd-color-settings-btn").length > 0 &&
		$("#bd-color-setings-input").length > 0 &&
		$("#bd-theme-color-label").length > 0
	) {
	tp_color_settings();
	}

	// 11. slider__active Js
	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			speed: 1000,
			effect: "fade",
			rtl: rtl_setting,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 10000,
			},

			// If we need pagination
			pagination: {
				el: ".slider-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
				},
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	if (jQuery(".slider__active-2").length > 0) {
		let sliderActive1 = ".slider__active-2";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			speed: 1000,
			effect: "fade",
			rtl: rtl_setting,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 10000,
			},

			// If we need pagination
			pagination: {
				el: ".swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	var themeSlider = new Swiper(".classname", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	// 12. Masonary Js
	$(".grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			filter: ".c-1",
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".grid-item",
			},
		});

		// filter items on button click
		$(".masonary-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".masonary-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	// Masonary Js
	$(".blog-grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".blog-grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".grid-item",
			},
		});
	});

	// 13. magnificPopup js 
	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// 14. Wow Js
	new WOW().init();

	// 15. InHover Active Js
	$(".hover__active").on("mouseenter", function () {
		$(this)
			.addClass("active")
			.parent()
			.siblings()
			.find(".hover__active")
			.removeClass("active");
	});

	// 16. testimonial-activation
	const testitmonial = new Swiper(".testimonial-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 40,
			},
		},
	});

	// 17. op-gallery-activation
	const opGallery = new Swiper(".operation-gallery-slider", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".op-gallery-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".op-gallery-button-next",
			prevEl: ".op-gallery-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	});

	// 18. service-slider activation
	var swiper = new Swiper(".service-slider", {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".service-pagination",
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			576: {
				slidesPerView: 2.6,
			},
			768: {
				slidesPerView: 3.6,
			},
			991: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});

	// service2 activation
	const service2slider = new Swiper(".service2-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".service2-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".service2-slider-button-next",
			prevEl: ".service2-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});


	// 19. brand-active activation
	$('.brand-active').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 5,
		draggable:true,
		rtl: rtl_setting,
		responsive: [
		  {
			breakpoint: 1201,
			settings: {
			  slidesToShow: 4
			}
		  },
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 450,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	});

	// 20. blog-slide activation
	const blogslider = new Swiper(".blog-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".blog-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".blog-slider-button-next",
			prevEl: ".blog-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
		},
	});

	const blogslider2 = new Swiper(".blog-slider-2", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".blog-2-pagination",
			clickable: true,
		},
	});

	// 21. team activation
	const teamslider = new Swiper(".team-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".team-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".team-slider-button-next",
			prevEl: ".team-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	});

	// team-3 activation
	const team3slider = new Swiper(".team-3-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".team-3-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".team-3-slider-button-next",
			prevEl: ".team-3-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	});
	
	// 22. testimonial activation
	const testimonialslider = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-slider-button-next",
			prevEl: ".testimonial-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			991: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
		},
	});

	// testimonial2 activation
	const testimonialslider2 = new Swiper(".testimonial-slider-2", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".testimonial-pagination-2",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-slider-button-next-2",
			prevEl: ".testimonial-slider-button-prev-2",
		},
	});


	// vertical-testimonial activation 
	if ($(".vertical-testimonial-slider").length > 0) {
		$(".vertical-testimonial-slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			vertical: true,
			arrows: true,
			centerMode: true,
			verticalSwiping: true,
			prevArrow:
				'<button type="button" class="vertical-testimonial-prev nav-square-btn"><i class="fal fa-angle-up"></i></button>',
			nextArrow:
				'<button type="button" class="vertical-testimonial-next nav-square-btn"><i class="fal fa-angle-down"></i></button>',
			appendArrows: $(".vertical-testimonial-navigation"),
		});

	}
	if ($(".testimonial-thumb").length > 0) {
		$(".testimonial-thumb").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: ".vertical-testimonial-slider",
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: false,
			rtl: rtl_setting,
		});
	}

	// 23. video activation
	const videoslider = new Swiper(".video-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".video-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".video-slider-button-next",
			prevEl: ".video-slider-button-prev",
		},
	});

	// 24. pricing activation
	const pricingslider = new Swiper(".pricing-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		speed: 1000,
		rtl: rtl_setting,
		autoplay: {
			delay: 5000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".pricing-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".pricing-slider-button-next",
			prevEl: ".pricing-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	});

	// 25. Services Details Circle Js 
	$("#percentage").waypoint(function () {
		// circle-1
		$('.circle_counter').map(function (i, elem) {
			let count = Number($(this).data("count")) ? Number($(this).data("count")) : 0;

			$(elem).circleProgress({
				value: count / 100,
				size: 90,
				thickness: 2,
				lineCap: 'round',
				emptyFill: "#FFECBF",
				fill: '#FFAF00'
			}).on('circle-animation-progress', function (event, progress) {
				$(this).find('.counter_percentage').html(Math.round(count * progress) + '<i>%</i>');
			});
		});
	}, {
		offset: 'bottom-in-view'
	});
	
	
	// 26. Active Odometer Counter 
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});

	function docReady(fn) {
		// see if DOM is already available
		if (document.readyState === "complete" || document.readyState === "interactive") {
			// call on next available tick
			setTimeout(fn, 1);
		} else {
			document.addEventListener("DOMContentLoaded", fn);
		}
	}

	// 27. video play 
	docReady(function () {
		$(".thumbnail").on({
			mouseenter: function () {
				$(this).children("video").get(0).play();
			},
			mouseleave: function () {
				$(this).children("video").get(0).pause();
				// $(this).children("video").get(0).currentTime = 0;
			}
		});
	});

	// 28. load more btn 
	$(".load-more-btn").on("click", function(){
		var $this = $(this).text("").html('<i class="fa fa-spinner fa-spin"></i>');
		window.setTimeout(function(){
		   $this.html('').text("Load More");
		},3000);
	  });

})(jQuery);