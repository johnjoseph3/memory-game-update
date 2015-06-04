app.router.route('game', function () {

	var easy = 18;
	var hard = 24;

  $('#header-container').html($('#gameboard-header').html());

	function boardPopulate (squareNum) {
		var i = 0;

		while ( i < squareNum) {
			$('.game-board').append($('#game-square').html());
		i++;
		};
	};

	boardPopulate(easy);

});

  


