this["Views"] = this["Views"] || {};
this["Views"]["templates"] = this["Views"]["templates"] || {};
this["Views"]["templates"]["containerFormTest"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<li><input type=\"radio\" name=\"option\" id=\"answer_"
    + alias3(((helper = (helper = helpers.id_answer || (depth0 != null ? depth0.id_answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_answer","hash":{},"data":data}) : helper)))
    + "\"><label for=\"answer_"
    + alias3(((helper = (helper = helpers.id_answer || (depth0 != null ? depth0.id_answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_answer","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</label></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"form__container\">\r\n	<div class=\"title-form\">Выберите один варинат ответа</div>\r\n	<div class=\"question\" id=\""
    + alias3(((helper = (helper = helpers.id_question || (depth0 != null ? depth0.id_question : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_question","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.quest || (depth0 != null ? depth0.quest : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quest","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div class=\"answers\">\r\n		<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				\r\n		</ul>\r\n	</div>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["error"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"content-form\">\r\n	<div class=\"title__form\">Поздравляем! Вам присвоен уровень <span class=\"level-name\">"
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"level","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n	<p>Вы ответили на "
    + alias3(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"result","hash":{},"data":data}) : helper)))
    + " вопроса из 25. Результат прохождения теста < 50%. Подробный отчет о прохождении пробного тестирования отправлен вам на e-mail. Теперь вы можете записаться на собеседование. </p>\r\n	<a href=\"\" class=\"btn__enroll btn__type-2\" data-test-review><span>Запись на собеседование</span></a>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["headFormTest"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"form__head\">\r\n	<div class=\"row\">\r\n		<div class=\"title__level\"><span>Уровень "
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + ":</span><span>"
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"level","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n		<div class=\"number-quest\"><span class=\"current\">{current}</span><span class=\"end\">25</span></div>\r\n		<div class=\"timing\">{time}</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"progress-bar\">\r\n			<div class=\"line-bar__noactive\"></div>\r\n			<div class=\"line-bar__active\"></div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["success"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"content-form\">\r\n	<div class=\"title__form\">Поздравляем! Вы правильно ответили на "
    + alias3(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"result","hash":{},"data":data}) : helper)))
    + " из 25 вопросов</div>\r\n	<p>Вы успешно прошли "
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + "-ый уровень "
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"level","hash":{},"data":data}) : helper)))
    + ". Продолжите прохождение тестирования для определения более точного уровня знания английского языка или же сразу записаться на собеседование к преподавателю.</p>\r\n	<a href=\"\" class=\"btn__enroll btn__type-2\" data-test-newlevel><span>Продолжить тест</span></a>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"popup__wrap\" data-test>\r\n	<div class=\"popup\">\r\n		<div class=\"popup__form border__effect\" data-test-window>\r\n			<div class=\"popup__inner\">\r\n				<div class=\"form\">\r\n					{head}\r\n					{content}\r\n					<div class=\"form__footer\">\r\n						<div class=\"action__block\"><a class=\"link-svg-arrow\" data-test-next><span>следующий вопрос</span></a></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\" data-test-onsucces>\r\n			<div class=\"form\">\r\n				{success}\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\" data-test-onerror>\r\n			<div class=\"form\">\r\n				{error}\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect is-active\" data-test-validation>\r\n			<div class=\"popup__inner\">\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Выберите ваш возраст</div>\r\n					<div class=\"form-column\">\r\n						<ul>\r\n							<li><input type=\"radio\" name=\"option\" id=\"10_age\"><label for=\"10_age\">До 10</label></li>\r\n							<li><input type=\"radio\" name=\"option\" id=\"11_age\"><label for=\"11_age\">11 - 17</label></li>\r\n							<li><input type=\"radio\" name=\"option\" id=\"18_age\"><label for=\"18_age\">18 и более</label></li>\r\n						</ul>\r\n					</div>\r\n					<a href=\"\" class=\"btn__enroll btn__type-2\" data-test-valid>Продолжить</a>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__form border__effect\" data-test-writebig>\r\n			<div class=\"popup__inner\">\r\n				<button class=\"popup__close\">\r\n					<i class=\"icon_close_svg\">\r\n						<svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n							<path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n						</svg>\r\n					</i>\r\n				</button>\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Запись на собеседование</div>\r\n					<form action=\"\" class=\"js-validate\">\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Имя</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Фамилия</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Отчество</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation-regexp=\"^[-0-9()+ ]+$\" data-validation=\"custom\" type=\"text\" class=\"input__field input__field-effect js-input-tel\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Телефон</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row\">\r\n							<span class='field field-effect'>\r\n								<textarea rows=\"1\" cols=\"30\" class=\"input__field input__field-effect\"></textarea>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Комментарий</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"title__lvl-2\">Контакты одного из родителей</div>\r\n						</div>\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Имя</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Фамилия</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Отчество</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation-regexp=\"^[-0-9()+ ]+$\" data-validation=\"custom\" type=\"text\" class=\"input__field input__field-effect js-input-tel\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Телефон</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row\">\r\n							<button class=\"btn__type-2\" type=\"submit\"><span>Отправить</span></button>\r\n						</div>\r\n					</form>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__form border__effect\" data-test-writesmall>\r\n			<div class=\"popup__inner\">\r\n				<button class=\"popup__close\">\r\n					<i class=\"icon_close_svg\">\r\n						<svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n							<path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n						</svg>\r\n					</i>\r\n				</button>\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Запись на собеседование</div>\r\n					<form action=\"\" class=\"js-validate\">\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Имя</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Фамилия</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row columns\">\r\n							<span class='field field-effect'>\r\n								<input data-validation=\"required\" type=\"text\" class=\"input__field input__field-effect\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Отчество</span>\r\n								</label>\r\n							</span>\r\n							<span class='field field-effect'>\r\n								<input data-validation-regexp=\"^[-0-9()+ ]+$\" data-validation=\"custom\" type=\"text\" class=\"input__field input__field-effect js-input-tel\" autocomplete='off'>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Телефон</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row\">\r\n							<span class='field field-effect'>\r\n								<textarea rows=\"1\" cols=\"30\" class=\"input__field input__field-effect\"></textarea>\r\n								<label class=\"input__label input__label-effect\">\r\n									<span class=\"input__label-content input__label-content-effect\">Комментарий</span>\r\n								</label>\r\n							</span>\r\n						</div>\r\n						<div class=\"row\">\r\n							<button class=\"btn__type-2\" type=\"submit\"><span>Отправить</span></button>\r\n						</div>\r\n					</form>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\" data-test-error>\r\n			<div class=\"popup__inner\">\r\n				<button class=\"popup__close\">\r\n					<i class=\"icon_close_svg\">\r\n						<svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n							<path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n						</svg>\r\n					</i>\r\n				</button>\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Благодарим вас за проделанную работу!</div>\r\n					<p>Ваш успешно записались на собеседование. Мы свяжемся с вами в ближайшее время!</p>\r\n					<a href=\"/\" class=\"popup__close\"><span>На главную</span></a>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});