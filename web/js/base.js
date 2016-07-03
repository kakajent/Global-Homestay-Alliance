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

	//user
	$('.nav-user').hover(function(){
		$(this).addClass('bg-black');
		$('.user-menu').show();
	},function(){
		$('.user-menu').hide();
	})

	//
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus();
	});

	//select
	$('.select').change(function(){
		var $this = $(this).val(),
			$box = $('.select-option-box'),
			$familyBox = $('.family-option-box'),
			$custodianBox = $('.custodian-option-box'),
			$schoolBox = $('.school-option-box'),
			$custodian = $('.custodian-price-box'),
			$school = $('.school-price-box'),
			$price = $('.language-price-box');
		if ($this == 'live') {
			$box.show();
		} else if ($this == 'family') {
			$familyBox.show();
		} else if ($this == 'pet') {
			$box.show();
		} else if ($this == 'allow') {
			$box.show();
		} else if ($this == 'custodian') {
			$custodianBox.show();
			$('.select-price-cus').change(function(){
				if ($(this).val() == 'custodian-price') {
					$custodian.show();
				} else {
					$custodian.hide();
				}
			});
		} else if ($this == 'school') {
			$schoolBox.show();
			$('.select-price-sch').change(function(){
				if ($(this).val() == 'school-price') {
					$school.show();
				} else {
					$school.hide();
				}
			});
		} else if ($this == 'language') {
			$box.show();
			$('.select-price-lan').change(function(){
				if ($(this).val() == 'language-price') {
					$price.show();
				} else {
					$price.hide();
				}
			});
		} else {
			$box.hide();
			$price.hide();
			$schoolBox.hide();
			$custodianBox.hide();
		}
	});

	//account list
	$('.bank-default dd').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	//add new account
	$('.btn-add-account').click(function () {
		$(this).hide();
		$('.new-account').show();
	});
	$('.btn-account-close').click(function () {
		$('.btn-add-account').show();
		$('.new-account').hide();
	});

	//
	$('.form_datetime').datetimepicker({
		//language:  'fr',
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		showMeridian: 1
	});
});

