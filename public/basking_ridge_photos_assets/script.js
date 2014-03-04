$(function() {
	var loupeRadius = 50; // px
	var $loupe = $("<div draggable=\"true\" class=\"loupe\" />").hide();
	$("body").append($loupe);

	var $currentImg = null;

	var initLoupe = function($img) {
		if(!$img.is($currentImg)) {
			$currentImg = $img;
			$loupe.css("background-image", "url(" + $img.data("loupify-overlay") + ")");
		}
		$loupe.show();
	};

	var handleMove = function(ev) {
		var offsetX = (ev.pageX - $currentImg.offset().left) - loupeRadius;
		var offsetY = (ev.pageY - $currentImg.offset().top) - loupeRadius;
		$loupe.css("background-position", -offsetX + "px " + (-offsetY) + "px");
		$loupe.css("left", ev.pageX - loupeRadius + "px");
		$loupe.css("top", ev.pageY - loupeRadius + "px");
	}

	$("body").on("mousemove mouseenter", "img.loupify", function(ev) {
		$tgt = $(ev.target).closest("img.loupify");
		initLoupe($tgt);
		handleMove(ev);
	});

	$loupe.on("mousemove", function(ev) {
		var offset = $currentImg.offset();
		if(ev.pageX < offset.left
			|| ev.pageX > offset.left + $currentImg.width()
			|| ev.pageY < offset.top
			|| ev.pageY > offset.top + $currentImg.height() )
			$loupe.hide();
		else
			handleMove(ev);
	});
});
