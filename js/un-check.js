app.unCheck = function(tile1, tile2) {
	
	setTimeout(function(){ 
		
		$(tile1).siblings('.checkbox').attr('checked', false);
		$(tile2).siblings('.checkbox').attr('checked', false);

	 }, 1000);

}