$(document).ready(function(){
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
			cont.addClass('opened');
			contBg.addClass('opened');
			document.body.classList.add('animate-block');
		});
		close.on('click', function(){
			actionRemove(cont, contBg);
			actionRemoveArea(area)
		});
		popupCont.on('mouseleave', function(){
			actionRemove(cont, contBg);
		});
		function actionRemove(btn, close) {
			cont.removeClass('opened');
			contBg.removeClass('opened');
			document.body.classList.remove('animate-block');
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

	//SLICK SLIDER

	(function () {
		var sliderImg = $('.slider_img');

		if (sliderImg.length) {

			sliderImg.slick({
				arrows: false,
				dots: false
			});

			$('.btn__left').on('click', function(){
				sliderImg.slick('slickPrev');
			});

			$('.btn__right').on('click', function(){
				sliderImg.slick('slickNext');
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


	//MENU FIXED BOX

	function Menu (config) {
		this.elem = config.elem;
		this.block = config.contentBlock;
		this.closeBtn = 'data-type-close';
		this.item = 'data-item';
		this.content = 'data-content-menu';
		this.activeItem = null;

		this._fadeMenu = _eventMouseMenu.bind(this);

		var over = this.over.bind(this),
			out = this.out.bind(this),
			close = this.close.bind(this),
			tryAdd = undefined;

		function _eventMouseMenu(item, e, callback) {
			if (!item) {
				console.info('Don\'t target');
				callback();
			}

			var siblingItem = this.elem.querySelectorAll('li.active');

			Array.prototype.forEach.call(siblingItem, function (item) {
				item.classList.remove('active');
			});

			if (e.type == 'mouseover') {
				this.elem.classList.add('hovered');
				item.classList.add('active');
				this.block.classList.add('visible');
				document.body.classList.add('animate-block');

				callback(e);
			} else if (e.type == 'mouseout') {
				this.elem.classList.remove('hovered');
				item.classList.remove('active');
				this.block.classList.remove('visible');
				document.body.classList.remove('animate-block');

				callback(e);
			} else {
				this.elem.classList.remove('hovered');
				document.body.classList.remove('animate-block');

				callback();
			}
		};

		function _removeEventMenu() {
			document.removeEventListener('mouseover', over);
			document.removeEventListener('mouseout', out);
			document.removeEventListener('click', close);

			tryAdd = false;
		}

		function _addEventMenu() {
			document.addEventListener('mouseover', over);
			document.addEventListener('mouseout', out);
			document.addEventListener('click', close);

			tryAdd = true;
		}

		window.addEventListener('resize', function () {
			if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
				_removeEventMenu();
			} else if (!tryAdd) {
				_addEventMenu();
			} else {
				return;
			}
		});

		window.addEventListener('load', function () {
			if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
				_removeEventMenu();
			} else if (!tryAdd) {
				_addEventMenu();
			} else {
				return;
			}
		});
	}

	Menu.prototype.over = function (e) {
		var e = e || window.event,
			target = e.target || e.srcElement,
			relatedTarget = e.relatedTarget || e.fromElement;

		while (target != document) {
			if (target.hasAttribute(this.item)) {
				break;
			}

			target = target.parentNode;
		}

		if (target == document) {
			return;
		}

		this.activeItem = target;

		if (target.classList.contains('active')) {
			return;
		}
		
		this._fadeMenu(target, e, function (e) {
			var id = target.getAttribute(this.item),
				attr = this.content;

			Array.prototype.forEach.call(this.block.children, function (item) {
				if (item.getAttribute(attr) == id) {
					item.classList.add('visible');
				} else {
					item.classList.remove('visible');
				}
			});
		}.bind(this));
	};

	Menu.prototype.out = function (e) {
		var e = e || window.event,
			target = e.target || e.srcElement,
			relatedTarget = e.relatedTarget || e.toElement;

		if (!this.activeItem) {
			return;
		}

		if (relatedTarget) {
			while (relatedTarget != document) {
				if (relatedTarget == this.activeItem || relatedTarget.hasAttribute(this.content)) {
					return;
				}

				relatedTarget = relatedTarget.parentNode;
			}
		}

		this._fadeMenu(target, e, function (e) {
			var id = target.getAttribute(this.item),
				attr = this.content;

			Array.prototype.forEach.call(this.block.children, function (item) {
				if (item.getAttribute(attr) == id) {
					item.classList.add('visible');
				} else {
					item.classList.remove('visible');
				}
			});
		}.bind(this));
	};

	Menu.prototype.close = function (e) {
		var e = e || window.event,
			target = e.target || e.srcElement;

		while (target != document) {
			if (target.hasAttribute(this.closeBtn)) {
				break;
			}

			target = target.parentNode;
		}

		if (target == document) {
			return;
		}

		this._fadeMenu(document, e, function (e) {
			this.block.classList.remove('visible');

			Array.prototype.forEach.call(this.block.children, function (item) {
				item.classList.remove('visible');
			});

			this.block.classList.remove('visible');

		}.bind(this));
	};

	(function() {
		var hoverSection = new Menu({
			elem: document.querySelector('.main__menu'),
			contentBlock: document.querySelector('.content__bg')
		});
	}) ();


	//CUSTOM SCROLL
	(function (){
		var isTouchDevice = (function() {
			try {
				var hasTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

				if (window.innerWidth && parseInt(window.innerWidth) <= 780) {
					return window.matchMedia('(pointer: coarse)').matches || hasTouch;
				}

			} catch (e) {
				return false;
			}
		}());

		if(!isTouchDevice){
			return $('.fixed').niceScroll({
				cursorwidth: 8,
				cursoropacitymin: 1,
				cursoropacitymax: 1,
				cursorborderradius: '0px',
				autohidemode: false,
				background: '#e5e5e5',
				cursorcolor: '#fec601',
				cursorborder: 'none',
				usetransition: false
			});
		}

		jQuery('body').addClass('touch-device');
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
	})();


	//FOCUS / BLUR POPUP INPUTS
	(function(){
		var input = $('.input__field'),
			filled = 'field-filled',
			field = $('field');

		input.each(function(){
			var this_ = $(this);

			this_.on('focus', function(){
				$(this).parent().addClass('field-filled');
			});
			this_.on( 'blur', function(){
				if($(this).val() === ''){
					$(this).parent().removeClass('field-filled');
				}				
			});

		});
	})();


	//AUTO RESIZE TEXTAREA
	(function(){
		var textarea = $('.input__field');

		autosize(textarea);

	})();

	//FORM VALIDATOR
	(function(){
		var form_validate = $('.js-validate'),
			success = $('.popup__success'),
			forms = $('.popup__form');
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
						forms.removeClass('is-active');
						success.addClass('is-active');
						return false;
					}
				});
			});
		};
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

			console.log(count)
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

});