
$(document).ready(function(){
	// if($(window).innerWidth() < 768){
	// 	$('.project .row').slick({
	// 		autoplay:false,
	// 		arrow:false,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		infinite: false,
	// 	});

		
	// }

	$('.slide-course').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
	});

	$('.top-tab-course a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.top-tab-course a').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

})

