$(".service-item").fadeTo(1, 0);
$(".portfolio-item img").fadeTo(1, 0);
$(".cd-timeline-block").fadeTo(1, 0);

$(window).scroll(function(){
	
	$('.service-item').each( function(i){
		
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
		bottom_of_window = bottom_of_window -200;  

		if( bottom_of_window > bottom_of_object ){

		$(this).animate({'opacity':'1'},2500);

		}
	}); 


	$('.portfolio-item img').each( function(i){
		
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
		bottom_of_window = bottom_of_window -1500;  

		if( bottom_of_window > bottom_of_object ){

		$(this).animate({'opacity':'1'},2500);

		}
	}); 
	$('.cd-timeline-block').each( function(i){
		
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
		bottom_of_window = bottom_of_window -2000;  

		if( bottom_of_window > bottom_of_object ){

		$(this).animate({'opacity':'1'},2000);

		}
	});

});

