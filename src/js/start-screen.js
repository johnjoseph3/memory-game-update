app.router.route('', function () {

	$('body').html($('#start-page').html());

	$('.home-btns').on('click', function() {
		setTimeout(function() {
			window.location.reload();
		}, 500);
				
	});

});

  

