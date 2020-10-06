$(document).ready(function() {

	$('.hmenu_total a').click(function() {
		$('body').addClass('fixed');
		$('#totalMenu').removeClass('fixed').show();
		anioption = {
			time: 0.8,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			'right': '0'
		}, anioption);
		$('.overlay').fadeIn();

	});

	$('#totalHeadClose').click(function() {
		anioption = {
			time: 0.6,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			'right': '-100%'
		}, anioption);
		$('#totalMenu').addClass('fixed').hide(0.8);
		$('body').removeClass('fixed');
		$('.overlay').fadeOut();
	});

	$('.overlay').click(function() {
		anioption = {
			time: 0.6,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			'right': '-100%'
		}, anioption);
		$('#totalMenu').addClass('fixed').hide(0.8);
		$('body').removeClass('fixed');
		$('.overlay').fadeOut();
	});

});
