$(document).ready(function () {

	$('#albums a').on('click', function(e) {
		var target = $(this);
		var targetName = target.attr('href');
		
		$('#albums').hide();
		$(targetName).show();
		$('#side-nav').show();
	});

	$('#side-nav a').on('click', function(e) {
		$(".album").hide();
		$($(this).attr('href')).show();

	});

});