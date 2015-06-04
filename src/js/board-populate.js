app.boardPopulate = function (difficulty) {

	var i = 0;

		while ( i < difficulty) {
			$('.game-board').append($('#game-square').html());
		i++;
		};

}



