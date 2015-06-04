app.router.route('hard', function () {

	var hard = 24;

	$('#header-container').html($('#gameboard-header').html());

	app.boardPopulate(hard);

});
