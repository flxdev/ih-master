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
    + " вопроса из 25. Результат прохождения теста < 50%. Подробный отчет о прохождении пробного тестирования отправлен вам на e-mail. Теперь вы можете записаться на собеседование. </p>\r\n	<a href=\"\" class=\"btn__enroll btn__type-2\">Запись на собеседование</a>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["headFormTest"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"form__head\">\r\n	<div class=\"row\">\r\n		<div class=\"title__level\"><span>Уровень "
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + ":</span><span>"
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"level","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n		<div class=\"number-quest\"><span class=\"current\">{current}</span><span class=\"end\">25</span></div>\r\n		<div class=\"timing\">12:45</div>\r\n	</div>\r\n	<div class=\"row\">\r\n		<div class=\"progress-bar\">\r\n			<div class=\"line-bar__noactive\"></div>\r\n			<div class=\"line-bar__active\"></div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["succses"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"content-form\">\r\n	<div class=\"title__form\">Поздравляем! Вы правильно ответили на "
    + alias3(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"result","hash":{},"data":data}) : helper)))
    + " из 25 вопросов</div>\r\n	<p>Вы успешно прошли "
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + "-ый уровень Elementary. Продолжите прохождение тестирования для определения более точного уровня знания английского языка или же сразу записаться на собеседование к преподавателю.</p>\r\n	<a href=\"\" class=\"btn__enroll btn__type-2\">Продолжить тест</a>\r\n</div>";
},"useData":true});
this["Views"]["templates"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"popup__wrap\" data-test>\r\n	<div class=\"popup\">\r\n		<div class=\"popup__form border__effect\" data-test-window>\r\n			<div class=\"popup__inner\">\r\n				<div class=\"form\">\r\n					{head}\r\n					{content}\r\n					<div class=\"form__footer\">\r\n						<div class=\"action__block\"><a class=\"link-svg-arrow\" data-test-next><span>следующий вопрос</span></a></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\" data-test-onsucces>\r\n			<div class=\"form\">\r\n				{succes}\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\" data-test-onerror>\r\n			<div class=\"form\">\r\n				{error}\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect is-active\" data-test-validation>\r\n			<div class=\"popup__inner\">\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Выберите ваш возраст</div>\r\n					<div class=\"form-column\">\r\n						<ul>\r\n							<li><input type=\"radio\" name=\"option\" id=\"10_age\"><label for=\"10_age\">До 10</label></li>\r\n							<li><input type=\"radio\" name=\"option\" id=\"11_age\"><label for=\"11_age\">11 - 17</label></li>\r\n							<li><input type=\"radio\" name=\"option\" id=\"18_age\"><label for=\"18_age\">18 и более</label></li>\r\n						</ul>\r\n					</div>\r\n					<a href=\"\" class=\"btn__enroll btn__type-2\" data-test-valid>Продолжить</a>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});