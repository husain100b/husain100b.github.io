// Custom JS Script code here and jQuery plugins activation
$(document).ready(function() {
	$(".owl-carousel.slider-active").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		animateOut: 'zoomOut',
    	animateIn: 'zoomIn',
		smartSpeed: 1500,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1 
			}
		}
	});
	$(".owl-carousel.testimonial-carousel-active").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		animateOut: 'slideOutDown',
    	animateIn: 'flipInX',
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 1500,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1 
			}
		}
	});
});