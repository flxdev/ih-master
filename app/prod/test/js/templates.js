this["Views"] = this["Views"] || {};
this["Views"]["templates"] = this["Views"]["templates"] || {};
this["Views"]["templates"]["view"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "									<li><input type=\"radio\" name=\"option\" id=\"answer_"
    + alias3(((helper = (helper = helpers.id_answer || (depth0 != null ? depth0.id_answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_answer","hash":{},"data":data}) : helper)))
    + "\"><label for=\"answer_"
    + alias3(((helper = (helper = helpers.id_answer || (depth0 != null ? depth0.id_answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_answer","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</label></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"popup__wrap\" data-test-window>\r\n	<div class=\"popup\">\r\n		<div class=\"popup__form border__effect is-active\">\r\n			<div class=\"popup__inner\">\r\n				<div class=\"form\">\r\n					<div class=\"form__head\">\r\n						<div class=\"row\">\r\n							<div class=\"title__level\"><span>Уровень "
    + alias3(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + ":</span><span>"
    + alias3(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"level","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n							<div class=\"number-quest\"><span class=\"current\">15</span><span class=\"end\">25</span></div>\r\n							<div class=\"timing\">12:45</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"progress-bar\">\r\n								<div class=\"line-bar__noactive\"></div>\r\n								<div class=\"line-bar__active\"></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"form__container\">\r\n						<div class=\"title-form\">Выберите один варинат ответа</div>\r\n						<div class=\"question\" id=\""
    + alias3(((helper = (helper = helpers.id_question || (depth0 != null ? depth0.id_question : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_question","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.quest || (depth0 != null ? depth0.quest : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quest","hash":{},"data":data}) : helper)))
    + "</div>\r\n						<div class=\"answers\">\r\n							<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "									\r\n							</ul>\r\n						</div>\r\n					</div>\r\n					<div class=\"form__footer\">\r\n						<div class=\"action__block\"><a class=\"link-svg-arrow\"><span>следующий вопрос</span></a></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"popup__success border__effect\">\r\n			<div class=\"popup__inner\">\r\n				<button class=\"popup__close\">\r\n					<i class=\"icon_close_svg\">\r\n						<svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n							<path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n						</svg>\r\n					</i>\r\n				</button>\r\n				<div class=\"form\">\r\n					<div class=\"title__form\">Благодарим вас за проделанную работу!</div>\r\n					<p>Ваш успешно записались на собеседование. Мы свяжемся с вами в ближайшее время!</p>\r\n					<a href=\"/\" class=\"popup__close\"><span>На главную</span></a>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});