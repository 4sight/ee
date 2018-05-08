$(document).ready(function(){ 
    $('#connect').mouseenter(function(){
	  $(this).addClass('linkHover');
	});
	$('#connect').mouseleave(function(){
	  $(this).removeClass('linkHover');
	});
});