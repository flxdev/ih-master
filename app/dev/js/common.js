function openMenu() {
	var btn = document.querySelector('.btn-menu'),
		cont = document.querySelector('.nav__container'),
		contBg = document.querySelector('.nav__container-bg'),
		close = document.querySelector('.close__menu'),
		docs = document.querySelector('html'),
		popupCont = document.querySelector('.popup__menu');

	btn.addEventListener('click', function(){
		cont.classList.add('opened');
		contBg.classList.add('opened');
		docs.classList.add('space');
	})
	close.addEventListener('click', function(){
		actionRemove(cont, contBg, docs);
	});
	popupCont.addEventListener('mouseleave', function(){
		actionRemove(cont, contBg, docs);
	});
	function actionRemove(btn, close, popupCont) {
		cont.classList.remove('opened');
		contBg.classList.remove('opened');
		docs.classList.remove('space');
	}
};
openMenu();

function actionSearch(){
	var btn = document.querySelector(".subm"),
		area = btn.previousElementSibling,
		popupCont = document.querySelector('.popup__menu');

	btn.addEventListener("click", function(){
		area.classList.add('active');
		area.focus();
	});

	popupCont.addEventListener('mouseleave', function(){
		actionRemove(area);
	});

	function actionRemove(area) {
		area.classList.remove('active');
	}

};
actionSearch();

function openTabs() {
	var init = document.querySelector('.tab_init a'),
		tabCont = document.querySelector('.content__bg');

	document.addEventListener('mouseover', function(event){
		var target = event.target;
		if (!target.parentNode.classList.contains('tab_init')){
			return
		}
		init.parentNode.classList.add('hover');
		tabCont.classList.add('visible');
	});

	init.addEventListener('mouseleave', function(event){
		var target = event.target;
		init.parentNode.classList.remove('hover');
		tabCont.classList.remove('visible');
	});
}
openTabs();