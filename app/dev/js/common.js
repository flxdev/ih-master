$(document).ready(function(){
	//open menu
	function openMenu() {
		var btn = $('.btn-menu'),
			cont = btn.parents('body').find('.nav__container'),
			contBg = btn.parents('body').find('.nav__container-bg'),
			close = $('.close__menu'),
			docs = $('html'),
			popupCont = $('.popup__menu');

		btn.on('click', function(){
			cont.addClass('opened');
			contBg.addClass('opened');
			docs.addClass('space');
		});
		close.on('click', function(){
			actionRemove(cont, contBg, docs);
		});
		popupCont.on('mouseleave', function(){
			actionRemove(cont, contBg, docs);
		});
		function actionRemove(btn, close, popupCont) {
			cont.removeClass('opened');
			contBg.removeClass('opened');
			docs.removeClass('space');
		}
	}
	openMenu();
	function actionSearch() {
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
	};
	actionSearch();

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

	function slickInit(){
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
	};
	slickInit();
});

function Menu (config) {
	this.elem = config.elem;
	this.item = config.item;
	this.content = config.content;
	this.activeItem = null;
	this.block = config.contentBlock;

	this._fadeOutMenu = _eventMouseMenu.bind(this);
	this._fadeInMenu = _eventMouseMenu.bind(this);

	function _eventMouseMenu(item, callback) {
		if (!item) {
			console.info('Don\'t target');
			callback();
		}

		var siblingItem = item.parentNode.querySelectorAll('li.active');

		Array.prototype.forEach.call(siblingItem, function (item) {
			item.classList.remove('active');
		});

		item.classList.add('active');
		this.block.classList.add('visible');
		callback();
	};

	document.addEventListener('mouseover', this.over.bind(this));
	document.addEventListener('mouseout', this.out.bind(this));
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
	
	this._fadeInMenu(target, function () {
		console.log('In')
	});
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

	this._fadeOutMenu(target, function () {
		console.log('Out')
	});
};

(function() {
	var hoverSection = new Menu({
		elem: document.querySelector('.main__menu'),
		item: 'data-item',
		content: 'data-content-menu',
		contentBlock: document.querySelector('.content__bg'),
	});
}) ();