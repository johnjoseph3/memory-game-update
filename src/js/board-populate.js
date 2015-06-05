app.boardPopulate = function (difficulty) {

	var i = 0;

		// while ( i < difficulty) {
		// 	$('.game-board').append($('#game-square').html());
		// i++;
		// };

		var squareHtml = '<label class="tile" id="fdsf"><input type="checkbox" class="checkbox"><span class="card animated"><span class="icon">b</span><span></label>'

		$('.game-board').html(squareHtml);


		while ( i < 17	) {
			
			$('.game-board').append(squareHtml)	

		i++;
		};


		


}
