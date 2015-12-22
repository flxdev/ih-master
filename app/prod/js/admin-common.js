$(function() {

	// create custom file loader
	// 
	(function($) {
		var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
			isIE = /msie/i.test(navigator.userAgent);

		$.fn.customFile = function() {

			return this.each(function() {

				var $file = $(this).addClass('custom-file-upload-hidden'),
				$wrap = $('<div class="file-upload-wrapper">'),
					$input = $('<div class="file-upload-input"><span>Файл не выбран</span></div>'),

					$button = $('<a class="btn btn-type1 file-upload-button"><span>Выберите файл</span></button>'),
					$label = $('<label class="file-upload-button" for="' + $file[0].id + '">Select a File</label>');

				$file.css({
					position: 'absolute',
					left: '-9999px'
				});

				$wrap.insertAfter($file)
					.append($file, $input, (isIE ? $label : $button));

				// Prevent focus
				$file.attr('tabIndex', -1);
				$button.attr('tabIndex', -1);

				$button.click(function() {
					$file.focus().click(); // Open dialog
				});

				$file.change(function() {

					var files = [],
						fileArr, filename;


					if (multipleSupport) {
						fileArr = $file[0].files;
						for (var i = 0, len = fileArr.length; i < len; i++) {
							files.push(fileArr[i].name);
						}
						filename = files.join(', ');

					} else {
						filename = $file.val().split('\\').pop();
					}

					$input.html('<span>' + filename + '</span>')
						.attr('title', filename)
						.focus();

					$('.name-file-loading').html(filename);

					if (filename) {
						$('.active-field').addClass('changed');
					} else {
						$('.active-field').removeClass('changed');
					}
				});

				$input.on({
					blur: function() {
						$file.trigger('blur');
					},
					keydown: function(e) {
						if (e.which === 13) {
							if (!isIE) {
								$file.trigger('click');
							}
						} else if (e.which === 8 || e.which === 46) {
							$file.replaceWith($file = $file.clone(true));
							$file.trigger('change');
							$input.val('');
						} else if (e.which === 9) {
							return;
						} else {
							return false;
						}
					}
				});
			});
		};

		// checking suport file loader

		if (!multipleSupport) {
			$(document).on('change', 'input.customfile', function() {

				var $this = $(this),
					uniqId = 'customfile_' + (new Date()).getTime(),
					$wrap = $this.parent(),
					$inputs = $wrap.siblings().find('.file-upload-input').filter(function() {
						return !this.value
					}),
					$file = $('<input type="file" id="' + uniqId + '" name="' + $this.attr('name') + '"/>');

				setTimeout(function() {
					if ($this.val()) {

						if (!$inputs.length) {
							$wrap.after($file);
							$file.customFile();
						}
					} else {
						$inputs.parent().remove();
						$wrap.appendTo($wrap.parent());
						$wrap.find('input').focus();
					}
				}, 1);

			});
		}
	}(jQuery));

	// init validation forms

	(function(){
		var form_validate = $('.js-validate');

		if (form_validate.length) {
			form_validate.each(function () {

				var form_this = $(this);

				$.validate({
					form: form_this,
					borderColorOnError: true,
					scrollToTopOnError: false,
					onValidate: function ($form){

					},
					onSuccess: function ($form) {
						if ($form.hasClass('form-add-person')) {
							$('[class*="add-person-"]').modal('hide');
							$('.popup.success-add-person').modal('show');
						}

						if ($form.hasClass('form-edite-person')) {
							$('[class*="edite-person-"]').modal('hide');
							$('.popup.success-edite-person').modal('show');
						}

						return false;
					}
				});
			});
		};
	})();

	// success file loader and send file to server

	$('.btn-load-file').on('click', function (e) {
		e.preventDefault();

		$.ajax({
			url: "/",
			processData: false,
			data: $('.custom-file-upload-hidden').get(0).files[0],
			success: function () {
				$('.file-upload-wrapper+.btn')
					.parents('.row')
						.children('.info-board')
						.removeClass('is-active')
				$('.file-upload-wrapper+.btn')
					.parents('.row')
						.children('.info-board.success')
						.addClass('is-active');
				$('.active-field').removeClass('changed');
			},
			error: function () {
				$('.file-upload-wrapper+.btn')
					.parents('.row')
						.children('.info-board')
						.removeClass('is-active')
				$('.file-upload-wrapper+.btn')
					.parents('.row')
						.children('.info-board.success')
						.addClass('is-active');
				$('.active-field').removeClass('changed');
			}
		})
	});

	// deactivation day at form deactivation

	$('.deactive-day').on("change", function () {
		if ($(this).is(':checked')) {
			$(this).parents('.row').siblings('.row.list-6').each(function (i, item) {
				$(item).hide(300);
			});
		} else {
			$(this).parents('.row').siblings('.row.list-6').each(function (i, item) {
				$(item).show(300);
			});
		}
	});

	// activation title

	if ($(document)) {
		if ($('[title]').length >= 1) {
			$(document).tooltip({
				position: {
					my: "left-4 bottom-10",
					at: "right bottom"
				}
			});
		}
	}

	// create new field at forms activation / deactivation

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			if (target.classList.contains('btn-ico') && target.parentNode.classList.contains('groupe-btn-active')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		var str1 = '<div class="row"><span class="field field-effect"><div class="active-field"><div class="groupe-btn-active"><a href="" title="Добавить поле" class="btn-ico btn-plus"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><use xlink:href="prod/img/svg.min.svg#plus"></use></svg></span></a><a href="" title="Очистить выбранные даты" class="btn-ico btn-close"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><use xlink:href="prod/img/svg.min.svg#close"></use></svg></span></a></div><span class="field field-effect"><label class="input__label"><span class="input__label-content">Дата (c)</span></label><span class="calendar-input has-success"><input data-validation="required" type="text" autocomplete="off" class="input__field input__field-effect"><span class="input__label-temp"><span class="input__label-temp-content label-calendar"><span class="calendar"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><use xlink:href="prod/img/svg.min.svg#calendar"></use></svg></span></span></span></span></span><span class="field field-effect"><label class="input__label"><span class="input__label-content input__label-differenter">—</span></label></span><span class="field field-effect"><label class="input__label"><span class="input__label-content">Дата (до)</span></label><span class="calendar-input has-success"><input data-validation="required" type="text" autocomplete="off" class="input__field input__field-effect"><span class="input__label-temp"><span class="input__label-temp-content label-calendar"><span class="calendar"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><use xlink:href="prod/img/svg.min.svg#calendar"></use></svg></span></span></span></span></span></div></span></div>',
			str2 = '<div class="row list-6"><span class="field field-effect"><div class="active-field"><div class="groupe-btn-active"><a href="" title="Добавить поле" class="btn-ico btn-plus"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><use xlink:href="prod/img/svg.min.svg#plus"></use></svg></span></a><a href="" title="Очистить выбранные даты" class="btn-ico btn-close"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><use xlink:href="prod/img/svg.min.svg#close"></use></svg></span></a></div><span class="field field-effect"><span class="column"><label class="input__label"><span class="input__label-content">Часы</span></label><div class="select select-group"><select name="" class="dropdown" data-validation="required"><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></span><span class="column"><label class="input__label"><span class="input__label-content">Минуты</span></label><div class="select select-group"><select name="" class="dropdown" data-validation="required"><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></span></span><span class="field field-effect"><label class="input__label"><span class="input__label-content input__label-differenter">—</span></label></span><span class="field field-effect"><span class="column"><label class="input__label"><span class="input__label-content">Часы</span></label><div class="select select-group"><select name="" class="dropdown" data-validation="required"><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></span><span class="column"><label class="input__label"><span class="input__label-content">Минуты</span></label><div class="select select-group"><select name="" class="dropdown" data-validation="required"><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></span></span></div></span></div>';

		if (target.classList.contains('btn-plus')) {
			$(target).parents('.row').find('.btn-plus').hide(300);
			if ($(target).parents('.row').hasClass('list-6')) {
				$(target).parents('.row')[0].nextElementSibling.insertAdjacentHTML("beforeBegin", str2);
				if ($('.dropdown').length >= 1) {
					$('.dropdown').fancySelect();
				}
			} else {
				$(target).parents('.row')[0].nextElementSibling.insertAdjacentHTML("beforeBegin", str1);
				$( ".calendar-input input" ).datepicker({
					prevText: '',
					nextText: '',
					altFormat: "DD, d MM, yy"
				}).attr('readonly', 'readonly');

			    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

			    $( ".calendar-input input" ).datepicker("setDate", new Date());
			}

		} else if (target.classList.contains('btn-close')) {
			if ($(target).parents('.row')[0].classList.contains('original')) {

				$('.ui-tooltip.ui-widget').each(function (i, item) {
					item.style.display = 'none';
				});

				$(target).parents('.row').find('input').val('').removeAttr('checked').removeAttr('selected');
				$(target).parents('.row').find('select').removeAttr('checked').removeAttr('selected');
				if ($(target).parents('.row').find('.fancy-select').length > 0) {
					$(target).parents('.row').find('.options').children('li').removeClass('selected');
					$(target).parents('.row').find('.trigger').removeClass('selected').html($(target).parents('.row').find('.options').children('li')[0].innerHTML);
				}
				
				return;
			}

			$('.ui-tooltip.ui-widget').each(function (i, item) {
				item.style.display = 'none';
			});

			$(target).parents('.row').prev('.row').find('.btn-plus').show(300);

			$(target).parents('form')[0].removeChild($(target).parents('.row')[0]);
		}
		$('ui-tooltip').each(function (i, item) {
			item.style.display = 'none';
		});
	});

	// create new select

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			if (target.getAttribute('data-target') === 'new-select') {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		var count = Math.floor(Math.random() * (50)) + 1;

		if (target.parentNode.parentNode.querySelectorAll('select').length >= 2) {
			return;
		}

		var elem = target.parentNode.parentNode.querySelector('select').cloneNode(false);
		$(elem).removeClass('fancified');
		$(elem).html('<option value>Выберите значение</option>')
		target.parentNode.parentNode.appendChild(elem);

		if ($('.dropdown').length >= 1) {
			$('.dropdown').fancySelect();
		}
	});

	document.addEventListener('click', function (e) {
		var target = e.target;

		if (!target) {
			return;
		}

		while(target !== document && target !== null) {
			if (target.tagName === 'A' && $(target).find('.arrow-sort').length) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		$('a.sort-top').removeClass('sort-top');
		target.classList.toggle('sort-top');
	});
	
	var activeItem;

	// context menu

	document.addEventListener('mouseover', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			if (target.nodeName === 'TD') {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		activeItem = target;

		e.preventDefault();
	});

	// reset forms with teg

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			var str = target.getAttribute('data-target');

			if (str) {
				if (str.search(/add-teg/) !== -1) {
					break;
				}
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		var mathc = target.getAttribute('data-target').split('.').join(' ');

		$('[class*="' + mathc + '"]').find('input').removeAttr('checked');
	});

	// hide context menu

	document.addEventListener('mouseout', function (e) {
		var e = e || window.event,
			target = e.target || e.srcElement,
			relatedTarget = e.relatedTarget || e.toElement,
			elemBtn1, elemBtn2, elemBtn3;

		if (!activeItem) {
			return;
		}

		if (relatedTarget) {
			while (relatedTarget !== document && relatedTarget !== null) {
				if (relatedTarget === activeItem) {
					return;
				}

				relatedTarget = relatedTarget.parentNode;
			}
		}

		e.preventDefault();

		elemBtn1 = $('.btn-groupe.open').find('.btn-add.btn-with-ico')[0];

		if (elemBtn1) {
			if (elemBtn1.nodeType === 1) {
				return;
			}
		}

		elemBtn2 = $('.btn-groupe.open').find('.btn-edite.btn-with-ico')[0];

		if (elemBtn2) {
			if (elemBtn2.nodeType === 1) {
				return;
			}
		}

		elemBtn3 = $('.btn-groupe.open').find('.btn-type2.btn-write')[0];

		if (elemBtn3) {
			if (elemBtn3.nodeType === 1) {
				return;
			}
		}

		elemBtn4 = $('.btn-groupe.open').find('.btn-ico.btn-edite.btn-static')[0];

		if (elemBtn4) {
			if (elemBtn4.nodeType === 1) {
				return;
			}
		}

		$('.btn-groupe').removeClass('open');
	});

	(function () {
		window.collCheck = [];
		window.collCheckLocal = [];
	}) ();

	// deactivation task in tables
	
	document.addEventListener('click', function (e) {
		var target = e.target;

		if (!target) {
			return;
		}

		while(target !== document && target !== null) {
			if (target.classList.contains('remove')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();
		var col = $(target).parents('th'),
			inline = $(target).parents('td').prev('td'),
			count = undefined;

		if ($(target).parents('th')[0] && $(target).parents('th')[0].contains(target) || $(target).parents('.header').parents('.card-interview')[0]) {

			if ($(target).parents('th')[0]) {
				col.parents('tr').children().each(function (i, item) {
					if (col[0] === item) {
						count = i;
					}
				});

				col.parents('table').find('tr').each(function (i, item) {
					$(item).children().each(function (i, item) {
						if (i === count) {
							if ($(item).children('.is-deactive')) {
								$(item).children('.is-deactive').each(function (i, item) {
									$(item).removeClass('is-deactive');
								});
							}

							$(item).addClass('is-deactive');
							collCheck.push($(item));
						}
					});
				});
			} else {
				$(target).parents('.header').parents('.card-interview').addClass('is-deactive');

				if ($(target).parents('.header').parents('.card-interview').find('.time-list li .remove')[0]) {
					$(target).parents('.header').parents('.card-interview').find('.time-list li .remove').each(function (i, item) {
						if ($(item).hasClass('.is-deactive')) {
							$(item).each(function (i, item) {
								$(item).parents('li').removeClass('is-deactive');
							});
						}
					});
				}
			}
		} else if ($(target).parents('.time-list')[0] && $(target).parents('.time-list')[0].contains(target)) {
			var x = $(target).parents('tr').hasClass('is-deactive') || $(target).parents('td').hasClass('is-deactive') || $(target).parents('th').hasClass('is-deactive') || $(target).parents('li').hasClass('is-deactive') || $(target).parents('.card-interview').hasClass('is-deactive') || $(target).parents('.row-card .column').hasClass('is-deactive');

			if (x) {
				return;
			}

			$(target).parents('li').addClass('is-deactive');
			collCheck.push($(target).parents('li'));

		} else if ($(target).parents('td:first-of-type')[0] && $(target).parents('td:first-of-type')[0].contains(target) || $(target).parents('.left-side').parents('.column')[0]) {
			if ($(target).parents('td:first-of-type')[0]) {
				$(target).parents('td:first-of-type').parents('tr').children('td').each(function (i, item) {
					if ($(item).hasClass('is-deactive')) {
						return;
					}
					$(item).addClass('is-deactive');
					collCheck.push($(item));

					$(item).children('.is-deactive').each(function (i, item) {
						$(item).removeClass('is-deactive');
					});
				});
			} else {
				$(target).parents('.left-side').parents('.column').addClass('is-deactive');

				if ($(target).parents('.left-side').parents('.column').children().find('.is-deactive')[0]) {
					$(target).parents('.left-side').parents('.column').children().find('.is-deactive').removeClass('is-deactive');
				}
			}
		}
	});
	
	// show / hide "editer" mode

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			if (target.getAttribute('data-target') === '.success-edite') {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		document.body.classList.toggle('editer');
	});

	// activation "editer" mode

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target !== document && target !== null) {
			if (target.hasAttribute('data-event-modal')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		document.body.classList.remove('editer');
	});

	// dropdown context menu activation

	if ($('.dropdown').length >= 1) {
		$('.dropdown').fancySelect();
	}

	// count tags in page for calc width search
	
	$(document).ready(function () {
		if (!$(".inline-select")[0]) {
			return;
		}

		$(".inline-select").each(function (i, item) {
			if ($(item).children('a.btn-inline').length > 3) {
				$(item).parents('.subtools').addClass('long-inline-select');
			}
		});
	});

	// datepicker activation

	$( document ).ready(function () {
		if (!$( ".calendar-input input" )[0]) {
			return;
		}

		$( ".calendar-input input" ).datepicker({
			prevText: '',
			nextText: '',
			altFormat: "DD, d MM, yy"
		}).attr('readonly', 'readonly');

	    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	    $( ".calendar-input input" ).datepicker("setDate", new Date());
	});

	// icons datepicker

	document.addEventListener('click', function (e) {
		var target = e.target;

		while (target !== document && target !== null) {
			if (target.classList.contains('input__label-temp') && target.parentNode.classList.contains('calendar-input')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		$(target.previousElementSibling).datepicker( "show" );
	});

	var currentTime = new Date().getTime();

	// datepickers buttons activation

	document.addEventListener('click', function (e) {
		var target = e.target,
			time;

		while(target !== document && target !== null) {
			if (target.classList.contains('arrow-btn')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		if (target.classList.contains('arrow-left')) {
			if (target.classList.contains('deactive-btn-arrow')) {
				return;
			}

			if ($( ".calendar-input input" ).datepicker( "getDate" )) {
				time = $( ".calendar-input input" ).datepicker( "getDate" ).valueOf() - 24 * 60 * 60 * 1000;
			}

			if (!time) {
				time = new Date().getTime() - 24 * 60 * 60 * 1000;
			}

			$( ".calendar-input input" ).datepicker("setDate", new Date(time));

			if (currentTime <= time) {
				$('.arrow-left').addClass('.deactive-btn-arrow');
			}
		} else {
			$('.deactive-btn-arrow').removeClass('.deactive-btn-arrow');

			if ($( ".calendar-input input" ).datepicker( "getDate" )) {
				time = $( ".calendar-input input" ).datepicker( "getDate" ).valueOf() + 24 * 60 * 60 * 1000;
			}

			if (!time) {
				time = new Date().getTime() + 24 * 60 * 60 * 1000;
			}

			$( ".calendar-input input" ).datepicker("setDate", new Date(time));
		}
	});

	var collectionTeg = [];

	// write in textarea the tegs fasts choice 

	document.addEventListener('click', function (e) {
		var target = e.target,
			teg;

		while(target !== document && target !== null) {
			if (target.classList.contains('btn-type3') && target.parentNode.classList.contains('btn-fullwidth')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target || target == document) {
			return;
		}

		e.preventDefault();

		teg = $(target).parents('.add-teg')[0].classList[3];

		if (!collectionTeg[teg]) {
			collectionTeg[teg] = [];
		}

		if (collectionTeg[teg].length > 0) {
			collectionTeg[teg] = [];
		}

		$(target).parents('.form').find('.elem-checkbox').each(function (i, item) {
			if ($(item).is(':checked')) {
				collectionTeg[teg].push($(item).val());
			}
		});

		$('[data-target=".add-teg.' + teg + '"]').parents('.row.no-btn-modal').find('.input__field')[0].innerHTML += collectionTeg[teg].join(' ');
		$(target).parents('.add-teg').modal('hide');
		$('[data-target=".add-teg.' + teg + '"]').parents('.row.no-btn-modal').find('.input__field').parents('.field').addClass('has-success');
	});

	// dropdown context menu activation

	if ($('.dropdown-toggle').length >= 1) {
		$('.dropdown-toggle').dropdown();
	}
	
	// Show popup of success at save checkboxs in tables

	$('.elem-checkbox').click(function (e) {
		var target = e.target;

		if ($(target).parents('table').hasClass('report-archive')) {
			$('.popup.success-save').modal('show');
		} else {
			$('.popup.success-delete').modal('show');
		}
	});

	// Choosing checkboxs in tables

	$('.checkbox-general').click(function (e) {
		var target = e.target;

		if ($(target).parents('table').hasClass('report-archive')) {
			$('.popup.success-save').modal('show');
		} else {
			$('.popup.success-delete').modal('show');
		}	
		
		while(target) {
			if (target.classList.contains('checkbox-general')) {
				break;
			}

			target = target.parentNode;
		}

		if (!target) {
			return;
		}

		if (!$(target).is(':checked')) {
			$(target).parents('.content').find('.elem-checkbox').removeAttr('checked');
		} else {
			$(target).parents('.content').find('.elem-checkbox').prop('checked', 'checked');
		}
	});


	// Custom file loader
	if ($('input[type=file]')) {
		$('input[type=file]').customFile();
	}   
});
