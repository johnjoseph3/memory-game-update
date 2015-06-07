app.gamePlay = function () {
			
		var guessArr = []; //tile content
	  var guessTile = []; //actual tiles

	$('.card').on('click', function () {
   
	  var tile = this;
	  guessTile.push(tile);
	   
	  var tileContent = this.textContent;
	  guessArr.push(tileContent); 

	  if (guessArr.length === 2 && guessArr[0] === guessArr[1]) {
	    console.log('they match');

      guessArr = [];
  	  guessTile = [];

	  } else if (guessArr.length === 2 && guessArr[0] != guessArr[1]) {
  	  console.log('they dont match'); 
	  	 
	  	app.unCheck(guessTile[0], guessTile[1]);

	  	guessArr = [];
	    guessTile = [];
	   }  	    		 
	})
}