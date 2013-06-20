$(document).ready(function() {
	
	$("#pages").css("height",parseInt($("#home").css("height")) + parseInt($("#pages>article").css("padding-top")) + parseInt($("#pages>article").css("padding-bottom")));
	
	/* MENU COLORS SETUP */
	// array of colors, one for each page ### CUSTOMIZE
	var colors = new Array("#F0C","#F08","#F04","#F00");
	// set first options
	$("header menu li:first-child").css("color",colors[0]);
	$("header menu li:first-child").css("borderColor",colors[0]);
	$("#logo span#name").css("color",colors[0]);
	// set menu .hover()	
	$("header menu li").each(function () {
		$(this).hover(function () {
			$(this).css("color",colors[$(this).index()]);
			$(this).css("borderColor",colors[$(this).index()]);
		}, function () {
			if (!$(this).hasClass("active")) {
				$(this).css("color","#666");
			}
		});
	});

	/* HOMEPAGE SLIDESHOW */
	var photoCounter = $("div#slideshow img").size();
	var photoVisible = 0;	
	function slideshow () {
		$("div#slideshow img").fadeOut();
		$("div#slideshow img").eq(photoVisible).fadeIn();
		++photoVisible == photoCounter ? photoVisible = 0 : photoVisible;
		// set Time function
		setTimeout(slideshow, 5000);
	}
	// launch the recursive slideshow function
	slideshow(0);
	
	$("header menu li, footer p#copy a").bind("click", function () {
		$("#logo span#name").animate({
			color: colors[$(this).index()]
		}, 500);
		/* MENU BUTTON */
		$("header menu li").removeClass("active");
		$("header menu li").not($(this)).css("color","#666");
		$(this).addClass("active");
		/* SCROLLER SETUP */
		// horizontal scroll
		$("#scroller").scrollTo($(this).index() * parseInt($(".page").css("width")), 500);		
		// height animation
		if (parseInt($("#"+$(this).attr("title")).css("height")) + parseInt($("#pages>article").css("padding-top")) + parseInt($("#pages>article").css("padding-bottom")) > parseInt($("#pages").css("min-height"))) {		
			$("#pages").animate({
				height: parseInt($("#"+$(this).attr("title")).css("height")) + parseInt($("#pages>article").css("padding-top")) + parseInt($("#pages>article").css("padding-bottom")) + "px"
			}, 500);		
		} else {
			$("#pages").animate({
				height: parseInt($("#pages").css("min-height")) + "px"
			}, 500);
		}
		
		return false;
	});
	
	/* SOCIAL NETWORK REDIRECTs */
	$("footer p#social img").bind("click", function () {
		window.location = $(this).attr("longdesc");
	});
	
});