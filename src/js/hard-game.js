app.router.route('hard', function () {

	var hard = 24;

	app.generateHeader();

	var hardArr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l'];

	app.boardPopulate(hardArr, hard);

	app.gamePlay();


});

