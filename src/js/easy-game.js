app.router.route('easy', function () {

	var easy = 18;

	$('#header-container').html($('#gameboard-header').html());

	var easyArr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

	app.boardPopulate(easyArr, easy);

	//Start timer

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
	   } else if (guessArr.length === 2 && guessArr[0] != guessArr[1]) {
	  	   console.log('they dont match'); 
	  	 
	  	 	 app.unflip(guessTile[0], guessTile[1]);

	   		 guessArr = [];
	   		 guessTile = [];

	   }  	  	

	})

});

	 