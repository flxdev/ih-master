this["Views"] = this["Views"] || {};
this["Views"]["templates"] = this["Views"]["templates"] || {};
this["Views"]["templates"]["view"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"popup__wrap\" data-test-window>\r\n    <div class=\"popup\">\r\n        <div class=\"popup__form border__effect is-active\">\r\n            <div class=\"popup__inner\">\r\n                <button class=\"popup__close\">\r\n                    <i class=\"icon_close_svg\">\r\n                        <svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                            <path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n                        </svg>\r\n                    </i>\r\n                </button>\r\n				\r\n            </div>\r\n        </div>\r\n        <div class=\"popup__success border__effect\">\r\n            <div class=\"popup__inner\">\r\n                <button class=\"popup__close\">\r\n                    <i class=\"icon_close_svg\">\r\n                        <svg viewBox=\"0 0 24 24\" height=\"100%\" class=\"close_icon\" width=\"100%\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                            <path d=\"m0,4l4,-4l8,8l8,-8l4,4l-8,8l8,8l-4,4l-8,-8l-8,8l-4,-4l8,-8l-8,-8z\"/>\r\n                        </svg>\r\n                    </i>\r\n                </button>\r\n                <div class=\"form\">\r\n                    <div class=\"title__form\">Благодарим вас за проделанную работу!</div>\r\n                    <p>Ваш успешно записались на собеседование. Мы свяжемся с вами в ближайшее время!</p>\r\n                    <a href=\"/\" class=\"popup__close\"><span>На главную</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});