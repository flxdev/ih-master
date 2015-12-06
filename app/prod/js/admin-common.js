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
						if ($form.hasClass('form-create-person')) {
							$('.add-person').modal('hide');
							$('.popup.success-create-person').modal('show');
						}

                        if ($form.hasClass('form-edite-person')) {
                            $('.edite-interview').modal('hide');
                            $('.popup.success-edite-interview').modal('show');
                        }

						return false;
					}
				});
			});
		};
	})();

    if ($(document)) {
        $(document).tooltip({
            position: {
                my: "left-4 bottom-10",
                at: "right bottom"
            }
        });
    }

    if($('.groupe-btn-active')) {
    	Array.prototype.forEach.call(document.querySelectorAll('.groupe-btn-active'), function (item) {
    		item.addEventListener('click', function (e) {
    			var target = e.target;

    			while(target != this) {
    				if (target.classList.contains('btn-ico')) {
    					break;
    				}

    				target = target.parentNode;
    			}

    			if (target == this) {
    				return;
    			}

    			e.preventDefault();

    			if (target.classList.contains('btn-plus')) {
    				var elem = undefined;
    				var parent = target.parentNode;

    				while (!parent.classList.contains('row')) {
    					parent = parent.parentNode;
    				}

    				parent.parentNode.insertBefore(parent.cloneNode(true), parent);
    			}
    		});
    	});	
    }

    document.addEventListener('click', function (e) {
    	var target = e.target;

    	while(target != this) {
    		if (target.classList.contains('remove')) {
    			break;
    		}

    		target = target.parentNode;
    	}

    	if (target == this) {
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
    	} else if ($(target).parents('td:first-of-type')[0] && $(target).parents('td:first-of-type')[0].contains(target)) {
    		$(target).parents('td:first-of-type').parents('tr').children('td').each(function (i, item) {
    			if ($(item).hasClass('is-deactive')) {
    				return;
    			}
    			$(item).addClass('is-deactive');

    			$(item).children('.is-deactive').each(function (i, item) {
    				$(item).removeClass('is-deactive');
    			});
    		});
    	}
    });
	
	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target != this) {
			if (target.getAttribute('data-target') === '.success-edite') {
				break;
			}

			target = target.parentNode;
		}

		if (target == this) {
			return;
		}

		e.preventDefault();

		document.body.classList.toggle('editer');
	});

	document.addEventListener('click', function (e) {
		var target = e.target;

		while(target != this) {
			if (target.hasAttribute('data-event-modal')) {
				break;
			}

			target = target.parentNode;
		}

		if (target == this) {
			return;
		}

		e.preventDefault();

		document.body.classList.remove('editer');
	});

    if ($('.dropdown')) {
        $('.dropdown').fancySelect();
    }

	if ($('.dropdown-toggle')) {
		$('.dropdown-toggle').dropdown();
	}
    

    $('.checkbox-general').click(function (e) {
    	var target = e.target;

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
