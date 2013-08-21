var ctx = '/' + window.location.pathname.split("/")[1];
if (ctx.indexOf('.') > 0) {
	ctx = '';
}

jQuery(document).ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools : false
	});
});

function selPro(nav) {
	var val = $(nav).html();
	var pros = $('#product li');
	var child, tab_id;
	pros.each(function() {
		child = $(this).children();
		tab_id = '#' + child.attr('nav');
		if (val == child.html()) {
			$(this).addClass("active");
			$(tab_id).removeClass("hide");
		} else {
			$(this).removeClass("active");
			$(tab_id).addClass("hide");
		}
	});
}
