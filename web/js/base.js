$(document).ready(function () {
	//nav fixed & back-to-top
	//var offT = $(".header-search").offset().top;
	$("#totop").hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$("#totop").fadeIn();
			//$('.header-search').addClass("header-fixed");
		}
		else {
			$("#totop").hide();
			//$('.header-search').removeClass("header-fixed");
		}
	});
	$(window).trigger("scroll");
	$("#totop").click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});
	
	$('.nav-user').hover(function(){
		$(this).addClass('bg-black');
		$('.user-menu').show();
	},function(){
		$('.user-menu').hide();
	})
	
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	});
});

