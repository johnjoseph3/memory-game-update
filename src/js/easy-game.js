app.router.route('easy', function () {

	var easy = 18;

	$('#header-container').html($('#gameboard-header').html());

	app.boardPopulate(easy);

});