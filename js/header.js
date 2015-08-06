app.generateHeader = function (difficulty) {
	$('#header-container').html($('#gameboard-header').html());

  if (difficulty === 'easy') {
  	$('.hearts').text('nnnnnnnnnn');
  } else {
  	$('.hearts').text('nnnnnn');
  }

  
}