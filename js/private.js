
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
		responsive: [
	        {
	            breakpoint: 1023,
	            settings: { 
	                slidesToShow: 1.8,
	                infinite: false,
	            }
	        },
	        { 
	            breakpoint: 767, 
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 1
	            }
	        },
	        { 
	            breakpoint: 575, 
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        }
	    ],
	});

	$('.slide-bangvang').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
	});

	$('.slide-member').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
	});

	$('.slide-book').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
	});

	$('.slide-feedback').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
	});

	$('.slide-gallery-images').slick({
		autoplay:false,
		arrow:false,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: false,
	});

	$('.top-tab-course a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.top-tab-course a').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

})

