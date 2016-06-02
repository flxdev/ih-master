$(document).ready(function () {
	
	//scrollTo
	(function(){
		var block = $('.blocks-links'),
			link = block.find('a');

		link.click(function(){
			if($(this).hasClass('btn__enroll')){
				return false
			} else {
				var idscroll = $(this).attr('href'),
				top = $(idscroll).offset().top - 50;

				$(this).addClass('active__anchor').parent().siblings().find('a').removeClass('active__anchor');

				$('.fixed').getNiceScroll(0).doScrollTop(top, 1850);
				return false;
			}
		});
	})();

	var emitter = EventEmitter();

	//open menu
	(function () {
		var btn = $('.btn-menu.desktop'),
			cont = btn.parents('body').find('.nav__container'),
			contBg = btn.parents('body').find('.nav__container-bg'),
			close = $('.close__menu'),
			popupCont = $('.popup__menu'),
			btnSubm = $('.subm'),
			area = btnSubm.prev(),
			popupCont = btnSubm.parents('.popup__menu');

		btn.on('click', function(){
			setTimeout(function(){
				//cont.addClass('opened');
				cont.fadeIn(300);
			},300)
			
			contBg.addClass('opened');
			$('body').addClass('animate');
		});
		close.on('click', function(){
			actionRemove(cont, contBg);
			actionRemoveArea(area)
		});
		popupCont.on('mouseleave', function(){
			actionRemove(cont, contBg);
		});
		function actionRemove(btn, close) {
			cont.hide(0);
			//cont.removeClass('opened');
			contBg.removeClass('opened');
			$('body').removeClass('animate');
		}
	}) ();

	(function () {
		var btnSubm = $('.subm'),
			area = btnSubm.prev(),
			popupCont = btnSubm.parents('.popup__menu');

		btnSubm.on("click", function(){
			area.addClass('active');
			area.focus();
		});
		popupCont.on('mouseleave', function(){
			actionRemoveArea(area);
		});
	}) ();

	function actionRemoveArea(area) {
		area.removeClass('active');
	}

	//CLEAR BTN FOR SEARCH
	function searchBox(){
		var input = $('.js-input-search'),
			inputVal = input.val(),
			btnClear = input.parent().find('.js-btn-clear');

		if(inputVal.length > 0) {
			btnClear.fadeIn(200);
		}

		input.on('input', function(){
			var this_ = $(this);

			if(this_.val().length > 0){
				btnClear.fadeIn(200);
			} else {
				btnClear.fadeOut(200);
			}
		});

		btnClear.on("click", function(){
			input.val('');
			$(this).hide();
		})
	};
	

	if ($('.js-input-search').length) {
		searchBox();
	}

	//SLICK SLIDER

	(function () {
		var sliderImg = $('.slider_img'),
			btnLeft = undefined,
			btnRight = undefined;

		if (sliderImg.length) {

			Array.prototype.forEach.call(sliderImg, function (item) {
				var nameClass = item.parentNode.getAttribute('class').split(' ')[0];
			
				if ($(item).hasClass('slider-pb')) {
					$(item).on('init', function(){
						setTimeout(function(){
							$('.slide-pb').matchHeight();
						},10);						
					});
					$(item).slick({
						arrows: true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
						prevArrow: '<button type="button" class="slick-prev"><svg class="arrow_left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.968 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M41.968,19.969v2H11.972v-2H41.968"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M1.972,20.97l16.998-9.999v19.997L1.972,20.97z"/></svg></button>',
						nextArrow: '<button type="button" class="slick-next"><svg class="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.067 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M0.097,20.971v-2h29.996v2H0.097"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M40.093,19.97l-16.998,9.999V9.972L40.093,19.97z"/></svg></button>',
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 1
								}
							}
						]
					});
				} else if ($(item).hasClass('sertificate')) {
					$(item).slick({
						arrows: true,
						dots: false,
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
						prevArrow: '<button type="button" class="slick-prev"><svg class="arrow_left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.968 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M41.968,19.969v2H11.972v-2H41.968"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M1.972,20.97l16.998-9.999v19.997L1.972,20.97z"/></svg></button>',
						nextArrow: '<button type="button" class="slick-next"><svg class="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.067 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M0.097,20.971v-2h29.996v2H0.097"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M40.093,19.97l-16.998,9.999V9.972L40.093,19.97z"/></svg></button>',
						responsive: [
							{
								breakpoint: 980,
								settings: {
									slidesToShow: 2
								}
							},
							{
								breakpoint: 510,
								settings: {
									slidesToShow: 1
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 2
								}
							},
							{
								breakpoint: 375,
								settings: {
									slidesToShow: 1
								}
							}
						]
					});
				} else if ($(item).hasClass('slider-caption')) {
					$(item).slick({
						arrows: false,
						dots: false,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						asNavFor: '.caption'
					});
					$('.caption').slick({
						arrows: false,
						dots: false,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						asNavFor: '.slider-caption',
						fade: true
					});
				} else if ($(item).hasClass('reviews__img')) {
					$(item).slick({
						arrows: true,
						prevArrow: '<button type="button" class="slick-prev"><svg class="arrow_left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.968 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M41.968,19.969v2H11.972v-2H41.968"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M1.972,20.97l16.998-9.999v19.997L1.972,20.97z"/></svg></button>',
						nextArrow: '<button type="button" class="slick-next"><svg class="arrow_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.067 41.968"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M0.097,20.971v-2h29.996v2H0.097"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M40.093,19.97l-16.998,9.999V9.972L40.093,19.97z"/></svg></button>',
						dots: false,
						infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						asNavFor: '.reviews__text',
						fade: true
					});
					$('.reviews__text').slick({
						arrows: false,
						dots: false,
						infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						asNavFor: '.reviews__img'						
					});
				} else {
					$(item).on('init', function(slick){
						$(item).find('.text__block').addClass('init');
					});
					$(item).slick({
						arrows: false,
						dots: false,
						autoplay: true
					});
				}
				$('.' + nameClass + ' .btn__left').on('click', function(){
					$(item).slick('slickPrev');
				});
		
				$('.' + nameClass + ' .btn__right').on('click', function(){
					$(item).slick('slickNext');
				});
			});
		}

		window.addEventListener('resize', function () {
			if (window.innerWidth && parseInt(window.innerWidth) < 768) {
				$('.banner-slider .slider_img').slick('init');
			} else {
				$('.banner-slider .slider_img').slick('unslick');
			} 
		});

		window.addEventListener('load', function () {
			if (window.innerWidth && parseInt(window.innerWidth) < 768) {
				$('.banner-slider .slider_img').slick('init');
			} else {
				$('.banner-slider .slider_img').slick('unslick');
			}
		});
	}) ();

	(function() {
		var hoverSection = new Menu({
			elem: document.querySelector('.main__menu'),
			contentBlock: document.querySelector('.content__bg'),
			menuBox: document.querySelector('.boxes'),
			sub: document.querySelector('.content__bg .sub__header'),
			soc: document.querySelector('.content__bg .social')
		});
	}) ();


	//CUSTOM SCROLL
	(function (){
		// var isTouchDevice = (function() {
		// 	try {
		// 		var hasTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

		// 		if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
		// 			return window.matchMedia('(pointer: coarse)').matches || hasTouch;
		// 		}

		// 	} catch (e) {
		// 		return false;
		// 	}
		// }());

		// if(!isTouchDevice){
		// 	// return $('.fixed').niceScroll({
		// 	// 	cursorwidth: 8,
		// 	// 	cursoropacitymin: 1,
		// 	// 	cursoropacitymax: 1,
		// 	// 	cursorborderradius: '0px',
		// 	// 	autohidemode: false,
		// 	// 	background: '#e5e5e5',
		// 	// 	cursorcolor: '#fec601',
		// 	// 	cursorborder: 'none',
		// 	// 	usetransition: false,
		// 	// 	horizrailenabled: true,
		// 	// 	zindex: '9',
		// 	// 	enabletranslate3d: true,
		// 	// 	hwacceleration: false,
		// 	// 	//scrollspeed: 50,
		// 	// 	mousescrollstep: 20,
		// 	// 	enabletranslate3d: false,
		// 	// 	bouncescroll: false,
		// 	// 	smoothscroll: false
		// 	// });
		// 	var container = document.querySelector('.fixed');
		// 			Ps.initialize(container, {
		// 				suppressScrollX: true
		// 			});
		// }

		if (head.mobile) {
			jQuery('body').addClass('touch-device');
		} else {
			var container = document.querySelector('.fixed');
					Ps.initialize(container, {
						suppressScrollX: true
					});
		}

		
	})();

	//SCROLL TOP
	(function(){
		var btn = $('.btn__scroll'),
			scContent = $('.fixed'),
			top = scContent.scrollTop();

		scContent.on('scroll', function(){
			var top = $(this).scrollTop();
			
			if(top > 200) {
				btn.addClass('scrolled');
			} else {
				btn.removeClass('scrolled');
			}

		});		

		btn.on('click', function(){
			//scContent.getNiceScroll(0).doScrollTop(0, 1500);
			scContent.animate({
				scrollTop: $('body').offset().top
			},500);
		});
	})();

	//MOBILE MENU INIT
	(function () {
		var duration = 300,
			popupSelector = $('.menu-tablet'),
			innerSelector = $('.menu-tablet__in'),
			frame = $('html'),
			close = popupSelector.find('.close__menu'),
			btn = $('.subm'),
			area = btn.prev(),
			popupCont = btn.parents('.popup__menu');
		
		$('.btn-menu.mobile').on('click', function(event){

			frame.addClass('space');

			popupSelector.fadeIn({
				duration: duration,
				complete: function(){
					popupSelector.addClass("is-visible");
				}
			});
			event.stopPropagation();
		});

		close.on("click", function(){
			frame.removeClass('space');		
			if(!popupSelector.hasClass('is-visible')) return;
			
			popupSelector
				.removeClass("is-visible")
				.delay(duration)
				.fadeOut({
					duration: duration
				});
			area.removeClass('active');
			area.blur();
		});
	}) ();

	//TABS
	(function () {
		$(".js-tab-nav").each(function(){
			var tab_link = $(this).find("a"),
				tab_item = $(this).find("li"),
				index = tab_link.data("href"),
				parents = $(this).parents(".js-tab-group"),
				tab_cont = parents.find(".js-tab-cont");

			tab_link.on("click", function() {
				var index = $(this).data("href");
				var activeTab = $(this).parents(".js-tab_group").find("."+index);
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.fadeOut(0).removeClass('visible');
				setTimeout(function(){
        	   		parents.find("."+index).addClass('visible')
        		}, 10);
				parents.find("."+index).show();
				return false;
			});
			tab_item.first().addClass("is-active");
			parents.find("."+index).show();
			setTimeout(function(){
        	   		parents.find("."+index).addClass('visible')
        	}, 10);
		});
	})();

	//mobile nav
	(function(){
		$.fn.hasAttr = function(name) {
		  return this.attr(name) !== undefined;
		};
		var duration = 0;
		$(".js-nav-root a[data-nav]").on("click", function(){
			var nav = $("."+$(this).attr("data-nav"));
			$(".js-nav-root").fadeOut(duration);
			nav.fadeIn(duration);
			$(this).toggleClass("is-active");
			return false;
		});

		$(".js-nav-back").on("click", function(){
			$(".js-nav").fadeOut(duration);
			$(".js-nav-root").fadeIn(duration);
			return false;
		});

		$(".js-nav a[data-nav]").on("click", function(){
			var nav = $("."+$(this).attr("data-nav"));
			$(this).parents(".js-nav-main").fadeOut(duration);
			nav.fadeIn(duration);
			$(this).toggleClass("is-active");
			return false;
		});

		$(".js-subnav-back").on("click", function(){
			$(".js-subnav").fadeOut(duration);
			$(this).parents(".js-nav").find(".js-nav-main").fadeIn(duration);
			return false;
		});

		var link = $('.menu-tablet .tab__container').find('a');

		link.each(function(){
			$(this).on('click',function(){
				if($(this).hasAttr('data-nav')){
					return 
				}else {
					var lnk = $(this).attr('href');
					location.href = lnk;
				}
			});
		});
	})();


	//FOCUS / BLUR POPUP INPUTS
	(function(){
		var input = $('.input__field'),
			filled = 'field-filled',
			field = $('.field');

		

		input.each(function(){
			var this_ = $(this);

			if(this_.val().length > 0) {
				console.log(true)
				$(this).parent().addClass('field-filled');
			}

			this_.on('focus', function(){
				$(this).parent().addClass('field-filled');
			});
			this_.on( 'blur', function(){
				if($(this).val() === ''){
					$(this).parents('.field').removeClass('field-filled');
				}				
			});

		});
	})();

	var inp = $('.form__test').find('.input__field');
	inp.on('click', function(e){
		e.stopPropagation();
	});
	$(document).click(function(event){
		if(inp.is(':focus')) {
			inp.blur();
		}
	});

	//AUTO RESIZE TEXTAREA
	(function(){
		var textarea = $('.input__field');

		autosize(textarea);

	})();

	//FORM VALIDATOR
	(function(){
		var form_validate = $('.js-validate'),
			popup = form_validate.parents('.popup__wrap'),
			success = $('.popup__success'),
			forms = $('.popup__form'),
			author = $('.form__perspective');
		if (form_validate.length) {
			form_validate.each(function () {
				var form_this = $(this);
				$.validate({
					form : form_this,
					borderColorOnError : true,
					scrollToTopOnError : false,
					onValidate: function($form){

					},
					onSuccess: function($form){
						if (!$form.parents('.popup__wrap').hasClass('authorization')){
							removes(forms, success);
						}
						return false;
					}
				});
			});
		};
	})();

	function removes(forms, success) {
		forms.removeClass('is-active');
		success.addClass('is-active');
	};

	//form animation

	(function(){
		$('.js-reg').on('click', function(event){
			event.preventDefault();
			var this_ = $(this),
				attr = this_.data('active'),
				formIn = this_.parents('.js-form');
			if(attr === 'form_back') {
				formIn.addClass('is-visible');
			} else {
				formIn.removeClass('is-visible');
			};

			return false;
		});
	})();

	//TEL MASK 
	(function(){
		if ($(".js-input-tel").length) {
        	$(".js-input-tel").mask("+999 (99) 999 99 99");
    	}
	})();

	//POPUP INIT

	(function(){
		var duration = 500,
			popupSelector = $('.popup__wrap'),
			innerSelector = $('.popup'),
			success = $('.popup__success'),
			forms = $('.popup__form');
		
		$('.js-popup-link').on('click', function(event){
			var popup = $(this).data('href');

			$('.'+popup).fadeIn({
				duration: duration,
				complete: function(){
					$(this).addClass("is-visible");
				}
			});
			event.stopPropagation();
		});

		$(".popup").on("click", function(event){
			event.stopPropagation();
		});

		$("button.popup__close, .popup__wrap").on("click", function(){	
			if(!popupSelector.hasClass('is-visible')) return;
			
			popupSelector
				.removeClass("is-visible")
				.delay(duration)
				.fadeOut({
					duration: duration
				});
			setTimeout(function(){
				forms.addClass('is-active');
				success.removeClass('is-active');
			},duration);
	    });
	})();

	//TEXTAREA COUNTING

	(function(){
		var counter = $('.js-counter'),
			max__current = counter.parent().find('.js-counter'),
			i = 0;

		var calculate = function (){
			if (this && !this.context) {
				this_ = $(this);
			} else {
				this_ = this;
			}

			var count = this_.val().length,
				current = this_.parent().find('.current');

			current.html(count);
		};

		counter.each(function() {
			var currentMax = $(this).attr('maxlength'),
				currentMaxElem = $(this).parent().find('.max__current'),
				current = $(this).parent().find('.current');

			currentMaxElem.html(currentMax);
			current.html(i);
			$(this).keyup(calculate);
		});

	})();

	//fancybox
	(function(){
		$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").fancybox({
			padding: 0,
			openEffect: 'elastic',
			nextEffect: 'fade',
			prevEffect: 'fade',
			helpers: {
				overlay: {
					locked: true
				}
			},
			tpl: {
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><svg viewBox="0 0 24 24" height="100%" class="close_icon" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z"/></svg></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><svg class="arrow_right" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 42.067 41.968"><g id=""><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M0.097,20.971v-2h29.996v2H0.097"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M40.093,19.97l-16.998,9.999V9.972L40.093,19.97z"/></g></svg></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><svg class="arrow_left" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 41.968 41.968"><g id=""><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M41.968,19.969v2H11.972v-2H41.968"/><path class="stroke" fill="none" stroke-width="2" stroke-miterlimit="10" d="M1.972,20.97l16.998-9.999v19.997L1.972,20.97z"/></g></svg></span></a>'
			},
			margin: [90, 60, 90, 60]
		});
	})();

	(function () {
		var maps = Map();

		maps.init({
			selector: '.map',
			coord: 'data-coord'
		});

	}) ();

	//TABS INIT
	(function(){
		$('.tab__container').each(function(){
			var link = $(this).find('a'),
				items = $(this).find('li'),
				index = link.data("pagin"),
				parents = $(this),
				tabContent = $(this).find('.tabs');

			link.on('click', function(){
				var index = $(this).data('pagin'),
					activeTab = $(this).parents('.tab__container').find('.'+index);
				
				$(this).addClass('is-visible').parent().siblings().find('a').removeClass('is-visible');
				tabContent.fadeOut(0).removeClass('is-visible');
				setTimeout(function(){
					parents.find("."+index).addClass('is-visible');
				},10);
				parents.find("."+index).show();
				return false;
			});
			items.first().find('a').addClass("is-visible");
			parents.find("."+index).show();
			setTimeout(function(){
				parents.find("."+index).addClass('is-visible')
			}, 10);

		});
	})();

	$('.accordion').accordion({
		header: '.head',
		collapsible: true,
		active: false,
		heightStyle: 'content'
	});

	$('.js-show').on('click', function(e){
		e.preventDefault();
		var data = $(this).data('show');

		var top = $('.' + data).offset().top + $('.fixed').scrollTop() - 70;

		console.log(data, top)

		$('.fixed').getNiceScroll(0).doScrollTop(top, 200);

		setTimeout(function(){
			$('.' + data).trigger('click');
		},500)
	});

	//MASONRY
	(function(){
		var grid = $('.grid');

		Array.prototype.forEach.call(grid, function (item) {
			var nameClass = item.parentNode.getAttribute('class').split(' ')[0];

			if($(item).hasClass('review__list')){
				$(item).masonry({
					itemSelector: '.grid-item',
					//columnWidth: 330,
					//percentPosition: true,
					gutter: '.gutter-sizer'
				});
			}; /*else {
				$(item).masonry({
					itemSelector: '.grid-item'
				});
			}*/
		});

		// Array.prototype.forEach.call(grid, function (item) {
		// 	var nameClass = item.parentNode.getAttribute('class').split(' ')[0];

		// 	if($(item).hasClass('review__list')){
		// 		$(item).isotope({
		// 			itemSelector: '.grid-item',
		// 			masonry: {
		// 		    gutter: '.gutter-sizer'
		// 		  }
		// 		});
		// 	} else {
		// 		$(item).isotope({
		// 			itemSelector: '.grid-item',
		// 			getSortData: {
		// 				color: '[data-id]'
		// 			},
		// 			sortBy: [ 'color' ]
		// 		});
		// 	}
		// });

	})();

	// $('.grid').masonry({
	//   // options
	// 	itemSelector: '.grid-item',
	// 	//columnWidth: 80
	// });

});/**
 * [Menu class]
 * @param {[object]} config [description]
 */
// function Menu (config) {
// 	this.elem = config.elem;
// 	this.block = config.contentBlock;
// 	this.box = config.menuBox;
// 	this.sub = config.sub;
// 	this.soc = config.soc;
// 	this.closeBtn = 'data-type-close';
// 	this.item = 'data-item';
// 	this.content = 'data-content-menu';
// 	this.activeItem = null;

// 	this._fadeMenu = _eventMouseMenu.bind(this);

// 	var over = this.over.bind(this),
// 		out = this.out.bind(this),
// 		close = this.close.bind(this),
// 		tryAdd = undefined;

// 	function _eventMouseMenu(item, e, callback) {
// 		if (!item) {
// 			console.info('Don\'t target');
// 			callback();
// 		}

// 		var siblingItem = this.elem.querySelectorAll('li.active');

// 		Array.prototype.forEach.call(siblingItem, function (item) {
// 			item.classList.remove('active');
// 		});

// 		if (e.type == 'mouseover') {
// 				this.elem.classList.add('hovered');
// 				item.classList.add('active');
// 				this.block.classList.add('visible');
// 				document.body.classList.add('animate-block');
			

// 			callback(e);
// 		} else if (e.type == 'mouseout') {
// 			this.elem.classList.remove('hovered');
// 			item.classList.remove('active');
// 			this.block.classList.remove('visible');
// 			document.body.classList.remove('animate-block');

// 			callback(e);
// 		} else {
// 			this.elem.classList.remove('hovered');
// 			document.body.classList.remove('animate-block');

// 			callback();
// 		}
// 	};

// 	function _removeEventMenu() {
// 		document.removeEventListener('mouseover', over);
// 		document.removeEventListener('mouseout', out);
// 		document.removeEventListener('click', close);

// 		tryAdd = false;
// 	}

// 	function _addEventMenu() {
// 		document.addEventListener('mouseover', over);
// 		document.addEventListener('mouseout', out);
// 		document.addEventListener('click', close);

// 		tryAdd = true;
// 	}

// 	window.addEventListener('resize', function () {
// 		if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
// 			_removeEventMenu();
// 		} else if (!tryAdd) {
// 			_addEventMenu();
// 		} else {
// 			return;
// 		}
// 	});

// 	window.addEventListener('load', function () {
// 		if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
// 			_removeEventMenu();
// 		} else if (!tryAdd) {
// 			_addEventMenu();
// 		} else {
// 			return;
// 		}
// 	});
// }


// Menu.prototype.over = function (e) {
// 	var e = e || window.event,
// 		target = e.target || e.srcElement,
// 		relatedTarget = e.relatedTarget || e.fromElement;

// 	while (target != document) {
// 		if (target.hasAttribute(this.item)) {
// 			break;
// 		}

// 		target = target.parentNode;
// 	}

// 	if (target == document) {
// 		return;
// 	}

// 	this.activeItem = target;

// 	if (target.classList.contains('active')) {
// 		return;
// 	}

// 	this._fadeMenu(target, e, function (e) {
// 		var id = target.getAttribute(this.item),
// 			attr = this.content;

// 		Array.prototype.forEach.call(this.box.children, function (item) {
// 			if (item.getAttribute(attr) == id) {
// 					item.classList.add('visible');
				
// 			} else {
// 				item.classList.remove('visible');
// 			}
// 		});
// 	}.bind(this));
// };

// Menu.prototype.out = function (e) {
// 	var e = e || window.event,
// 		target = e.target || e.srcElement,
// 		relatedTarget = e.relatedTarget || e.toElement;

// 	if (!this.activeItem) {
// 		return;
// 	}

// 	if (relatedTarget) {
// 		while (relatedTarget != document) {
// 			if (relatedTarget == this.activeItem || relatedTarget.hasAttribute(this.content) || relatedTarget == this.sub || relatedTarget == this.soc) {
// 				return;
// 			}

// 			relatedTarget = relatedTarget.parentNode;
// 		}
// 	}

// 	this._fadeMenu(target, e, function (e) {
// 		var id = target.getAttribute(this.item),
// 			attr = this.content;

// 		Array.prototype.forEach.call(this.box.children, function (item) {
// 			if (item.getAttribute(attr) == id) {
// 				setTimeout(function(){
// 					item.classList.add('visible');
// 				},2000)
// 			} else {
// 				item.classList.remove('visible');
// 			}
// 		});
// 	}.bind(this));
// };

// Menu.prototype.close = function (e) {
// 	var e = e || window.event,
// 		target = e.target || e.srcElement;

// 	while (target != document) {
// 		if (target.hasAttribute(this.closeBtn)) {
// 			break;
// 		}

// 		target = target.parentNode;
// 	}

// 	if (target == document) {
// 		return;
// 	}

// 	this._fadeMenu(document, e, function (e) {
// 		this.block.classList.remove('visible');

// 		Array.prototype.forEach.call(this.box.children, function (item) {
// 			item.classList.remove('visible');
// 		});

// 		this.block.classList.remove('visible');

// 	}.bind(this));
// };

function Menu(){
	var containerMenu = $('.main__menu'),
		linkContainer = containerMenu.find('.tab_init'),
		link = linkContainer.find('a'),
		containerBg = containerMenu.find('.content__bg'),
		cBody = $('body'),
		bgItem = containerBg.find('bg'),
		close = containerMenu.find('.close__menu');

	$('.menu, .content__bg').on('click', function(event){
		event.stopPropagation();
	});
	function closes() {
		link.parent().removeClass('work');
		bgItem.removeClass('visible');
		containerMenu.removeClass('hovered');
		cBody.removeClass('animate-block');
		containerBg.removeClass('visible');
	};
	link.on('click', function(event){
		var _ = $(this),
			_p = _.parent(),
			index = _.parent().data('item');

		if(!_p.hasClass('work')) {
			_p.addClass('work').siblings().removeClass('work');
			event.preventDefault();
		}
		_p.addClass('active').siblings().removeClass('active');
		containerMenu.addClass('hovered');
		cBody.addClass('animate-block');
		containerBg.addClass('visible');
		$("[data-content-menu ='" + index + "'").addClass('visible').siblings().removeClass('visible');
	});

	$('.main__menu').on('click', function(){
		closes();
	});
	close.on('click', function(){
		closes();
	});
};


	function scrollPopup() {
		var container = document.querySelector('.scroll__area');
		Ps.initialize(container, {
			suppressScrollX: true
		});
	};
	scrollPopup()


/**
 * [Map constructor]
 */

function Map () {
	var markers = [],
		center = {},
		pathIMGMarker = ['./prod/img/map_marker.png', './prod/img/svg/map_marker.svg'],
		result;

    function configuration (config) {
    	var elemMap = document.querySelectorAll(config.selector),
        	_coord;

	    if (!elemMap || elemMap.length <= 0) {
	        return;
	    }

	    Array.prototype.forEach.call(elemMap, function(item, i) {
	    	var lengthGroupCoords = undefined;

	        if (!item.hasAttribute(config.coord)) {
	            return;
	        }

	        _coord = item.getAttribute(config.coord).split(';');

	        _createMarkerColl(_coord, _calcCenterMap);

	       	_createMap(item, markers);
	    });
	}

	function _customZoom (map) {
		var container = document.createElement('div');

	    container.innerHTML = "<div class='map__zoom-in'><svg viewBox='0 0 34.958 33.5' xmlns='http://www.w3.org/2000/svg'><g><g class='stroke'><path d='m1.532,1.523l31.996,0l0,63.991999l-31.996,0l0,-63.991999z' stroke-miterlimit='10' stroke-width='3' fill='none' clip-rule='evenodd' fill-rule='evenodd'/></g><g class='fill'><path d='m16.030001,13.538l2,0l0,9.997999l-2,0l0,-9.997999z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,17.537001l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,48.533001l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m1.032,32.535l31.996,0l0,3l-31.996,0l0,-3z' clip-rule='evenodd' fill-rule='evenodd'/></g></g></svg></div><div class='map__zoom-out'><svg viewBox='0 0 34.958 33.5' xmlns='http://www.w3.org/2000/svg'><g><g class='stroke'><path d='m1.532,-31.989063l31.996,0l0,63.992001l-31.996,0l0,-63.992001z' stroke-miterlimit='10' stroke-width='3' fill='none' clip-rule='evenodd' fill-rule='evenodd'/></g><g class='fill'><path d='m16.030001,-19.974062l2,0l0,9.997999l-2,0l0,-9.997999z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,-15.975061l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,15.020939l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m1.032,-0.977063l31.996,0l0,3l-31.996,0l0,-3z' clip-rule='evenodd' fill-rule='evenodd'/></g></g></svg></div>";
	    container.className = 'controlls__map';

	    google.maps.event.addDomListener(container.querySelector('.map__zoom-in'), 'click', function () {
	        map.setZoom(map.getZoom() + 1);
	    });

	    google.maps.event.addDomListener(container.querySelector('.map__zoom-out'), 'click', function () {
	        map.setZoom(map.getZoom() - 1);
	    });

	    return container;
	}

	function _createMarkerColl (coord, callback) {
		if (!markers && !(markers instanceof Array)) {
			markers = [];
		}

		coord.forEach(function (item) {
			markers.push(item.split(','));
		});

		markers.forEach(function (item, i, arr) {
			if (item.length <= 1 || !item[0] || !item[1]) {
				arr.splice(i, i + 1);
			}
		});

		if (!callback) {
			return;
		}

		callback();
	}
	
	function _createLabel () {
		var isSVGMarker = navigator.userAgent.toLowerCase().indexOf('trident') > -1,
			pathPNG, pathSVG;

		if (!pathIMGMarker) {
			return;
		}

		pathIMGMarker.forEach(function (item) {
			var _path = item.trim().slice(-3) || item.trim().split('.')[1];

			if (_path === 'png') {
				pathPNG = item;
			} else if (_path === 'svg') {
				if (pathPNG !== item) {
					pathSVG = item;
				}
			}
		});

		return checkPathMarker = isSVGMarker ? pathPNG : pathSVG;
	}

	function _calcCenterMap () {
		var tempX = 0, 
			tempY = 0,
			length = markers.length;

		if (!result && !(result instanceof Object)) {
			result = {};
		}

		markers.forEach(function (item, i) {
			tempX += item[0] ? parseFloat(item[0]) : 0;
			tempY += item[1] ? parseFloat(item[1]) : 0;
		});

		xCoordResult = (tempX / length).toFixed(6);
		yCoordResult = (tempY / length).toFixed(6);

		result = {
			x: xCoordResult,
			y: yCoordResult
		}
	}

    function _createMap (elem, coord) {
    	var style= [{"featureType":"landscape.natural.terrain","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}];

    	var mapsOptions = {
	            zoom: 12,
	            scrollwheel: false,
	            streetViewControl: false,
	            zoomControl: false,
	            scaleControl: false,
	            panControl: false,
	            mapTypeControl: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            center: new google.maps.LatLng(result.x, result.y),
	            styles: style
	        },
	        map = new google.maps.Map(elem, mapsOptions), 
	        controlls = _customZoom(map);

		    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlls);

	    markers.forEach(function (item, i) {
	    	var marker = new google.maps.Marker({
	    	    position: {
	    	    	lat: parseFloat(item[0]),
	    	    	lng: parseFloat(item[1])
	    	    },
	    	    map: map,
	    	    visible: true,
	    	    zIndex: (i + 1),
	    	    icon: _createLabel()
	    	});
	    });
    }

    return {
    	init: configuration
    }
}

/**
 * [EventEmitter singleton]
 */

function EventEmitter() {
    function on (event, handler) {
        if (!this._listHandlers) {
            this._listHandlers = {}
        }

        if (!this._listHandlers[event]) {
            this._listHandlers[event] = [];
        }

        this._listHandlers[event].push(handler);
    }

    function off (event, handler) {
        var handlers = this._listHandlers && this._listHandlers[event];

        if (!handlers) {
            return;
        }

        for (var i = 0; i <= handlers.length; i++) {
            if (handlers[i] == handler) {
                handlers.splice(i - 1, 1);
            }
        }
    }

    function emit (event) {
        if (!this._listHandlers || !this._listHandlers[event]) {
            return;
        }

        var handlers = this._listHandlers[event];

        for (var i = handlers.length - 1; i >= 0; i--) {
            handlers[i].apply(this, arguments);
        }
    }

    return {
    	"on": on,
    	"off": off,
    	"emit": emit
    }
}