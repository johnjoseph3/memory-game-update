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

	  var hearts = $('.hearts').text();
	  
	  var removeHeart = function () {
	  	var sliceHearts = hearts.slice(0, -1);
	  	 
	  	 $('.hearts').text(sliceHearts);
	  };

	  if (guessArr.length === 2 && (guessArr[0] === guessArr[1])) {
	      console.log('they match');

        guessArr = [];
  	    guessTile = [];

	  } else if (guessArr.length === 2 && (guessArr[0] != guessArr[1])) {
	  	  console.log('they dont match'); 
	  	  removeHeart(); 
	  	  app.unCheck(firstTile, secondTile);
  
	  	  guessArr = [];
	      guessTile = [];
	   }  	    		 
	})

}