app.gamePlay = function () {
			
		var guessArr = []; //tile content
	  var guessTile = []; //actual tiles

	$('.card').on('click', function () {
   
	  var tile = this;
	  guessTile.push(tile);
	  var firstTile = guessTile[0];
	  var secondTile = guessTile[1]
	   
	  var tileContent = this.textContent;
	  guessArr.push(tileContent);

	  if (guessArr.length === 2 && (guessArr[0] === guessArr[1])) {
	    console.log('they match');

      guessArr = [];
  	  guessTile = [];

	  } else if (guessArr.length === 2 && (guessArr[0] != guessArr[1])) {
	  	  console.log('they dont match'); 
	  	  var hearts = $('.hearts').text();
	  	  var sliceHearts = hearts.slice(0, -1);
	  	  console.log(sliceHearts);
	  	  $('.hearts').text(sliceHearts);
	  	 
	  	app.unCheck(firstTile, secondTile);

	  	guessArr = [];
	    guessTile = [];
	   }  	    		 
	})

}