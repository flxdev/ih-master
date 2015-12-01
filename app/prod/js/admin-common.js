//toolstip

$(function() {
    $(document).tooltip({
    	position: { my: "left-4 bottom-10", at: "right bottom" }
    });
});

//tabs

(function () {
	$(".js-tab-nav").each(function(){
		var tab_link = $(this).find("a"),
			tab_item = $(this).find("li"),
			index = tab_link.data("href"),
			parents = $(this).parents(".js-tab-group"),
			tab_cont = parents.find(".js-tab-cont");

		tab_link.on("click", function() {
			var index = $(this).data("href");
			var activeTab = $(this).parents(".js-tab_group").find("."+index);
			tab_item.removeClass("is-active");
			$(this).parent().addClass("is-active");
			tab_cont.fadeOut(0).removeClass('visible');
			setTimeout(function(){
    	   		parents.find("."+index).addClass('visible')
    		}, 10);
			parents.find("."+index).show();
			return false;
		});
		tab_item.first().addClass("is-active");
		parents.find("."+index).show();
		setTimeout(function(){
    	   		parents.find("."+index).addClass('visible')
    	}, 10);
	});
}) ();