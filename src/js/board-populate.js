app.boardPopulate = function () {

	var i = 0;
    


		// while ( i < difficulty) {
		// 	$('.game-board').append($('#game-square').html());
		// i++;
		// };

		var arr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g'];


		function shuffleArray(array) {
    	for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    	};
    		return array;
		};

	  var shuffledArray = shuffleArray(arr);
	  
	  
		while ( i < 18	) {

			var arrIcon = shuffledArray[0];

			var squareHtml = '<label class="tile"><input type="checkbox" class="checkbox"><span class="card animated"><span class="icon">'+ arrIcon +'</span><span></label>'	
			
			$('.game-board').append(squareHtml);	

			shuffledArray.shift();

		i++;
		};


		


}
