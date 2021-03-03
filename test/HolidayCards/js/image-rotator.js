// JavaScript Document
var imageRotator = function (Images) {
	var page = 0;
	$('div#right-arrow').on('click', function () {
		page++;
		if (page > Images.image.length - 1) {
			page = 0;
		}
		loadImage(page);
	});
	
	$('div#left-arrow').on('click', function () {
		page--;
		if (page < 0) {
			page = Images.image.length - 1;
		}
		loadImage(page);
	});
	
	function loadImage(page) {
		$("div#image-container").fadeOut(0, function () {
			$(this).html(Images.caption[page]);
			$(this).css({ 'background' : '#fff url(' + Images.image[page] + ') center center no-repeat' });
			$(this).fadeIn(250);
		});
	}
	
	$(window).one('load', function () {
		loadImage(page);	
	});
}
