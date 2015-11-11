$(document).ready(function(){
	//open menu
	(function () {
		var btn = $('.btn-menu'),
			cont = btn.parents('body').find('.nav__container'),
			contBg = btn.parents('body').find('.nav__container-bg'),
			close = $('.close__menu'),
			popupCont = $('.popup__menu');

		btn.on('click', function(){
			cont.addClass('opened');
			contBg.addClass('opened');
		});
		close.on('click', function(){
			actionRemove(cont, contBg);
		});
		popupCont.on('mouseleave', function(){
			actionRemove(cont, contBg);
		});
		function actionRemove(btn, close) {
			cont.removeClass('opened');
			contBg.removeClass('opened');
		}
	}) ();

	(function () {
		var btn = $('.subm'),
			area = btn.prev(),
			popupCont = btn.parents('.popup__menu');

		btn.on("click", function(){
			area.addClass('active');
			area.focus();
		});
		popupCont.on('mouseleave', function(){
			actionRemove(area);
		});
		function actionRemove(area) {
			area.removeClass('active');
		}
	}) ();

	// function openTabs(){
	// 	var init = $('.tab_init'),
	// 		time;

	// 	init.each(function(){
	// 		var this_ = $(this),
	// 			tabCont = $('.content__bg'),
	// 			attrLink = this_.data('item'),
	// 			parent = this_.parents('.main__menu'),
	// 			subbox = this_.find('.subbox'),
	// 			close = this_.find('.close__menu'),
	// 			docs = $('html'),
	// 			content = this_.find('.content__box');

	// 		this_.on('mouseover', function(){				
	// 			this_.addClass('active').siblings().removeClass('active');
	// 			parent.find('.'+attrLink).addClass('visible').siblings().removeClass('visible');
	// 			tabCont.addClass('visible');
	// 			parent.addClass('hovered');
	// 			subbox.delay(200).stop(true, true).fadeIn({
	// 				duration: 200,
	// 				complete: function(){
	// 					$(this).addClass('show');
	// 				}
	// 			})
				
	// 			docs.addClass('space');
	// 		});

	// 		this_.on('mouseleave', function(){
	// 			parent.removeClass('hovered');
	// 			clearTimeout(time);
	// 			this_.removeClass('active');
	// 			tabCont.removeClass('visible');
	// 			parent.find('.'+attrLink).removeClass('visible');
	// 			docs.removeClass('space');
	// 			subbox
	// 				.removeClass('show')
	// 				.stop(true, true)
	// 				.fadeOut()
	// 		});
	// 		close.on('click', function(){
	// 			parent.removeClass('hovered');
	// 			clearTimeout(time);
	// 			this_.removeClass('active');
	// 			tabCont.removeClass('visible');
	// 			parent.find('.bg').removeClass('visible');
	// 			docs.removeClass('space');
	// 			subbox.fadeOut();
	// 		});
	// 	});
	// }
	// openTabs();

	(function () {
		var sliderImg = $('.slider_img');

		if(sliderImg.length){
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
	}) ();

	(function () {
		var fix = $('.fixed');

		fix.niceScroll({
			cursorwidth: 8,
			cursoropacitymin: 1,
			cursoropacitymax: 1,
			cursorborderradius: '0px',
			touchbehavior: false,
			autohidemode: false,
			background: '#e5e5e5',
			cursorcolor: '#fec601',
			cursorborder: 'none',
			scrollspeed: 50
		});
	}) ();
});

function Menu (config) {
	this.elem = config.elem;
	this.block = config.contentBlock;
	this.closeBtn = 'data-type-close';
	this.item = 'data-item';
	this.content = 'data-content-menu';
	this.activeItem = null;

	this._fadeMenu = _eventMouseMenu.bind(this);

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

			callback(e);
		} else if (e.type == 'mouseout') {
			this.elem.classList.remove('hovered');
			item.classList.remove('active');
			this.block.classList.remove('visible');

			callback(e);
		} else {
			callback();
		}
	};

	document.addEventListener('mouseover', this.over.bind(this));
	document.addEventListener('mouseout', this.out.bind(this));
	document.addEventListener('click', this.close.bind(this));
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
	}.bind(this));
};

(function() {
	var hoverSection = new Menu({
		elem: document.querySelector('.main__menu'),
		contentBlock: document.querySelector('.content__bg')
	});
}) ();

