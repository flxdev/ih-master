$(function() {
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

	if ($(document)) {
		$(document).tooltip({
			position: {
				my: "left-4 bottom-10",
				at: "right bottom"
			}
		});
	}

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


		if (target.classList.contains('btn-plus')) {
			var elem = $(target).parents('.row')[0].cloneNode(true);
				$(target).parents('.row').find('.btn-plus').hide(300);
				$(elem).removeClass('original');
			$(target).parents('form')[0].insertBefore(elem, $(target).parents('.row')[0].nextElementSibling);
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
		var elem = target.parentNode.parentNode.querySelector('select').cloneNode(false);
		$(elem).removeClass('fancified');
		$(elem).html('<option value>Выберите значение</option>')
		target.parentNode.parentNode.appendChild(elem);

		if ($('.dropdown')) {
			$('.dropdown').fancySelect();
		}
	});
	
	var activeItem;

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

		elemBtn4 = $('.btn-groupe.open').find('.btn-ico.btn-edite')[0];

		if (elemBtn4) {
			if (elemBtn4.nodeType === 1) {
				return;
			}
		}

		$('.btn-groupe').removeClass('open');
	});

	(function () {
		window.collCheck = [];
	}) ();
	
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

		if ($(target).parents('th')[0] && $(target).parents('th')[0].contains(target)) {
			col.parents('tr').children().each(function (i, item) {
				if (col[0] === item) {
					count = i;
				}
			});

			col.parents('table').find('tr').each(function (i, item) {
				$(item).children().each(function (i, item) {
					if (i === count) {
						$(item).addClass('is-deactive');
						collCheck.push($(item));

						if ($(item).children('.is-deactive')) {
							$(item).children('.is-deactive').each(function (i, item) {
								$(item).removeClass('is-deactive');
							});
						}
					}
				});
			});
		} else if ($(target).parents('.time-list')[0] && $(target).parents('.time-list')[0].contains(target)) {
			var x = $(target).parents('tr').hasClass('is-deactive') || $(target).parents('td').hasClass('is-deactive') || $(target).parents('th').hasClass('is-deactive') || $(target).parents('li').hasClass('is-deactive');

			if (x) {
				return;
			}

			$(target).parents('li').addClass('is-deactive');
			collCheck.push($(target).parents('li'));

		} else if ($(target).parents('td:first-of-type')[0] && $(target).parents('td:first-of-type')[0].contains(target)) {
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
		}
	});
	
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

	if ($('.dropdown')) {
		$('.dropdown').fancySelect();
	}

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

	});

	var currentTime = new Date().getTime();

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

		$('[data-target=".add-teg.' + teg + '"]').parents('.row.no-btn-modal').find('.input__field').val(collectionTeg[teg].join(' '));
		$(target).parents('.add-teg').modal('hide');
		$('[data-target=".add-teg.' + teg + '"]').parents('.row.no-btn-modal').find('.input__field').parents('.field').addClass('has-success');
	});

	if ($('.dropdown-toggle')) {
		$('.dropdown-toggle').dropdown();
	}
	
	$('.elem-checkbox').click(function (e) {
		$('.popup.success-delete').modal('show');
	});

	$('.checkbox-general').click(function (e) {
		var target = e.target;

		$('.popup.success-delete').modal('show');
		
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

	if ($('input[type=file]')) {
		$('input[type=file]').customFile();
	}   
});
