$(function() {
	$(document).tooltip({
		position: {
			my: "left-4 bottom-10",
			at: "right bottom"
		}
	});

	$('.dropdown').selectmenu();

    $('.dropdown-toggle').dropdown();

    $('.checkbox-general').click(function () {
        if (!$('.checkbox-general').is(':checked')) {
            $('.elem-checkbox').removeAttr('checked');
        } else {
            $('.elem-checkbox').prop('checked', 'checked');
        }
    });

    $('input[type=file]').customFile();

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
});