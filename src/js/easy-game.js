app.router.route('easy', function () {

	var easy = 18;

	$('#header-container').html($('#gameboard-header').html());

	var easyArr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

	app.boardPopulate(easyArr, easy);


// Game logic

	//Start timer

	var guessArr = [];


	$('.card').on('click', function () {
	   var a = this.textContent;
	   console.log(a);
	   guessArr.push(a);
	   console.log(guessArr.length);	 

	   if (guessArr.length === 2 && (guessArr[0] === guessArr[1])) {
  	    alert('they match');
  	    guessArr = [];
	   }	else if (guessArr.length === 2 && guessArr[0] != guessArr[1] ) {
	  		console.log('they dont match'); 
	  		guessArr = [];
	  }	 	


	   
	})
	
	
	 
 	 

 // 	 $('.card').on('click', function () {
	//    var a = this.textContent;
	//    console.log(a);
	//    guessArr.push(a);
	//    console.log(guessArr);	 
	// })
	
	// if (guessArr.length === 2 && guessArr[0] === guessArr[1]) {
 //  	    alert('they match');
 //  	    guessArr = [];
	//    }	else if (guessArr.length === 2 && guessArr[0] != guessArr[1] ) {
	//   		console.log('they dont match'); 
	//   		guessArr = [];
	//   }	 
	  	 
	  


	// $('.tile').on('click', function () {
	// 	 b = this;
	// 	 console.log(b);
		
	// })



		//wait for second click

	//on click get second el by id
	
	//if a = b {set both to checked}

	//if a !- b {set both to unchecked}	



});

