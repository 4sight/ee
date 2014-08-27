$('a.link').mouseenter(function(){
	$(this).addClass('linkHover');
});
$('a.link').mouseleave(function(){
  $(this).removeClass('linkHover');
});
$('img.linkedin').hover(function(){
	$('.hiddenText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('.hiddenText').animate({
			opacity: 0
		})
	});