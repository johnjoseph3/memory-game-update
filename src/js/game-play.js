app.gamePlay = function () {
			
		var guessArr = []; //tile content
	  var guessTile = []; //actual tiles

	$('.card').on('click', function () {
   
	  var tile = this;
	  guessTile.push(tile);
	  var firstTile = guessTile[0];
	  var secondTile = guessTile[1]
	   
	  var tileContent = this.textContent;
	  var firstGuess = guessArr[0]; 
	  var secondGuess = guessArr[1];
	  guessArr.push(tileContent);

	  if (guessArr.length === 2 && firstGuess === secondGuess) {
	    console.log('they match');

      guessArr = [];
  	  guessTile = [];

	  } else if (guessArr.length === 2 && firstGuess != secondGuess) {
  	  console.log('they dont match'); 
	  	 
	  	app.unCheck(firstTile, secondTile);

	  	guessArr = [];
	    guessTile = [];
	   }  	    		 
	})
}