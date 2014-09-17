$('a.link').mouseenter(function(){
	$(this).addClass('linkHover');
});
$('a.link').mouseleave(function(){
  $(this).removeClass('linkHover');
});
$('a.resume').mouseenter(function(){
	$(this).addClass('linkHover');
});
$('a.resume').mouseleave(function(){
  $(this).removeClass('linkHover');
});
$('a#github').hover(function(){
	$('#githubText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#githubText').animate({
			opacity: 0
		})
	});
$('a#linkedIn').hover(function(){
	$('#linkedInText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#linkedInText').animate({
			opacity: 0
		})
	});