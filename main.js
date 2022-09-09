$( function () {
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//als er een slide veranderd maak de juiste thumb active
		var id = nextSlide + 1;
		$('.thumb').removeClass('active');
		$('#nav_item' + id + '').addClass('active');

		//view slide event
		pexi.event('view_slide_' + id + '');
	});

	$('.slider').on('swipe', function(event, slick, direction){
		pexi.event('user_swipe_' + direction + '');
	});

	setTimeout(function(){
		//maken van de slick slider
		$('.slider').slick({
			slidesToShow: 1,
			initialSlide: 0,
			arrows: false,
			infinite: true,
			cssEase: 'linear',
			autoplay: true,
			speed: 300,
			autoplaySpeed: 4000,
			dots: false,
			//fade: true,
			//cssEase: 'linear',
		});
	}, 500);

	//werking van de thumbs, id selecteren en slickTo..
	$('.thumb').click(function(){
		var id = this.id;
		var id = id.replace('nav_item', '');
		var idd = id - 1;

		$('.slider').slick('slickGoTo', idd);
		//navigatie click
		pexi.event('user_nav_' + id + '');
	});

	$('.slider').on('init', function(event, slick){
		$('.overlay').fadeOut();
	});

});