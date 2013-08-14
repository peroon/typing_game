//init
$(document).ready(function()
{
	var margin = 100;
	var width = window.innerWidth - margin;
	var height = window.innerHeight - margin;
	var score = 0;

	$('#start_button').css(
	{ 
		"top" : (height/2)+'px', 
		"left" : (width/2)+'px' 
	});

	$('#start_button').click( function()
	{
		$(this).fadeOut('slow');
		$('#score').show();
		genLetter();
	});

	$(document).keydown( function(event) 
	{
		//fall down & transparent
		var keycode = event.keyCode;
		var ch = String.fromCharCode(keycode);

		var mode = 'explode';
		switch(mode){
			case 'fall':
				$('.bubble'+ch).animate(
				{ 
					"top" : height+"px", "opacity" : 0 }, 'slow'
				);
				break;
			case 'explode':
				$('.bubble'+ch).effect('explode');	
				break;
		}

		//score & remove
		$('.bubble'+ch).fadeOut('slow').hide( 'slow', function()
			{
				score += 20;
				$('#score').html(score);
				$(this).remove();
			}
		);
		playRandomSound();
	});

	//random alphabet A-Z
	function genLetter()
	{
		var color = randomColor();
		var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
		var ch = String.fromCharCode(k);
		var top = Math.floor(Math.random() * height );
		var left = Math.floor(Math.random() * width );
		$('body').append('<span class="bubble bubble'+ ch +'" style="left: '+ left +'; top: '+ top +'; background-color:'+ color +'">'+ ch +'</span>');
		setTimeout(genLetter, 2000);
	}



});