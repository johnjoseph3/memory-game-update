app.router.route('easy', function () {

	var easy = 18;

	app.generateHeader();

	var easyArr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

	app.boardPopulate(easyArr, easy);

	app.gamePlay();

});

	 