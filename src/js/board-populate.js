app.boardPopulate = function (arr, difficulty, hearts) {

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

  // Generates hearts

  var hearts = 

  $('time-bar-ul').append(hearts);





  
  var i = 0;

	while ( i < difficulty ) {

		var arrIcon = shuffledArray[0];

		var squareHtml = '<label class="tile"><input type="checkbox" class="checkbox"><span class="card animated"><span class="icon">'+ arrIcon +'</span></label>'	
		
		$('.game-board').append(squareHtml);		

		shuffledArray.shift();

		i++;	 

	};

};
