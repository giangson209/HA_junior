
$(document).ready(function(){

	var a = 0;
	$(window).scroll(function () {
	    var oTop = $("#counter-box").offset().top - window.innerHeight;
	    if (a == 0 && $(window).scrollTop() > oTop) {
	        $(".counter").each(function () {
	            var $this = $(this),
	                countTo = $this.attr("data-number");
	            $({
	                countNum: $this.text()
	            }).animate(
	                {
	                    countNum: countTo
	                }, 
	                {
	                    duration: 2500, 
	                    easing: "swing", 
	                    step: function () {
	                        $this.text(
	                            Math.ceil(this.countNum).toLocaleString("en")
	                        );
	                    },
	                    complete: function () {
	                        $this.text(
	                            Math.ceil(this.countNum).toLocaleString("en")
	                        );
	                    }
	                }
	            );
	        });
	        a = 1;
	    }
	});

	if($(window).innerWidth() < 1024){
		$('.list-news .row').slick({
			autoplay:true,
			arrow:false,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			infinite: false,
			responsive: [
	        { 
	            breakpoint: 767, 
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1,
	                // nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
					// prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
	            }
	        },
	        { 
	            breakpoint: 575, 
	            settings: {
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                // nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
					// prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
	            }
	        }
	    ],
		});
	}

	$('.slide-banner').slick({
		autoplay:true,
		arrow:true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		dots: true,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
	});

	$('.slide-course').slick({
		autoplay:true,
		arrow:true,
		slidesToShow: 3,
		slidesToScroll: 1, 
		dots: true,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
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
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        },
	        { 
	            breakpoint: 575, 
	            settings: {
	                slidesToShow: 1.05,
	                slidesToScroll: 1
	            }
	        }
	    ],
	});

	$('.slide-bangvang').slick({
		autoplay:true,
		arrow:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
	});

	$('.slide-member').slick({
		autoplay:true,
		arrow:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
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
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        },
	        { 
	            breakpoint: 575, 
	            settings: {
	                slidesToShow: 1.05,
	                slidesToScroll: 1
	            }
	        }
	    ],
	});

	$('.slide-book').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		responsive: [
	        {
	            breakpoint: 1023,
	            settings: { 
	                slidesToShow: 2,
	                infinite: false,
	            }
	        },
	        { 
	            breakpoint: 767, 
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	            }
	        },
	        { 
	            breakpoint: 575, 
	            settings: {
	                slidesToShow: 1.05,
	                slidesToScroll: 1
	            }
	        }
	    ],
	});

	$('.slide-feedback').slick({
		autoplay:true,
		arrow:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
	});

	$('.slide-gallery-images').slick({
		autoplay:true,
		arrow:false,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: false,
		nextArrow: '<a href="javascript:void(0)" class="slide-right"><img src="images/slide-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="slide-left"><img src="images/slide-left.png" class="img-fluid" alt=""></a>',
		responsive: [
	        {
	            breakpoint: 1023,
	            settings: { 
	                slidesToShow: 2,
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
	                slidesToShow: 1,
	                slidesToScroll: 1
	            }
	        }
	    ],
	});

	$('.top-tab-course a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.top-tab-course a').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.tab-detail-course a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-detail-course a').removeClass('active'); 
		$('.tab-course').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.tab-about a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-about a').removeClass('active'); 
		$('.content-about').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	$('.btn-bar a').click(function(event) {
		$('html, .nav-menu').addClass('open_menu');
	});

	$('.close-menu a').click(function(event) {
		$('html, .nav-menu').removeClass('open_menu');
	});

	$('.nav-menu .top-menu ul li a').click(function(event) {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});

	$('.sidebar-course a').click(function(e){
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
	    var scrollTo = target.offset().top - 48;
	    $('body, html').animate({scrollTop: scrollTo+'px'}, 600);
	  }
	  $('.sidebar-course a').removeClass("active");
	  $(this).addClass("active");
	});


})

