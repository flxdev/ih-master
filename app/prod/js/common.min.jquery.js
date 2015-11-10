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

	function openTabs(){
		var init = $('.tab_init'),
			time;

		init.each(function(){
			var this_ = $(this),
				tabCont = $('.content__bg'),
				attrLink = this_.data('item'),
				parent = this_.parents('.main__menu'),
				subbox = this_.find('.subbox'),
				close = this_.find('.close__menu'),
				docs = $('html'),
				content = this_.find('.content__box');

			this_.on('mouseover', function(){				
				this_.addClass('active').siblings().removeClass('active');
				parent.find('.'+attrLink).addClass('visible').siblings().removeClass('visible');
				tabCont.addClass('visible');
				parent.addClass('hovered');
				subbox.delay(200).stop(true, true).fadeIn({
					duration: 200,
					complete: function(){
						$(this).addClass('show');
					}
				})
				
				docs.addClass('space');
			});

			this_.on('mouseleave', function(){
				parent.removeClass('hovered');
				clearTimeout(time);
				this_.removeClass('active');
				tabCont.removeClass('visible');
				parent.find('.'+attrLink).removeClass('visible');
				docs.removeClass('space');
				subbox
					.removeClass('show')
					.stop(true, true)
					.fadeOut()
			});
			close.on('click', function(){
				parent.removeClass('hovered');
				clearTimeout(time);
				this_.removeClass('active');
				tabCont.removeClass('visible');
				parent.find('.bg').removeClass('visible');
				docs.removeClass('space');
				subbox.fadeOut();
			});
		});
	}
	openTabs();

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