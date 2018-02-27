$(function() {



	$('.w_h').eq(0).css('display','block');
	$('.header .right').click(function () {
		h_c = $('.header .w_h').length;
		for(i = 0; i < h_c; i++){
			if($('.w_h').eq(i).css('display') == 'block'){
				$('.w_h').eq(i).css('display', 'none');
				$('.w_h').eq(++i).css('display', 'block');
			};
			if(i == h_c){
				$('.w_h').eq(i).css('display', 'none');
				$('.w_h').eq(0).css('display', 'block');
			};
		};
	});
	$('.header .left').click(function () {
		for(i = h_c-1; i >= 0; i--){
			if($('.w_h').eq(i).css('display') == 'block'){
				$('.w_h').eq(i).css('display', 'none');
				$('.w_h').eq(--i).css('display', 'block');
			};
			if(i == 0){
				$('.w_h').eq(i).css('display', 'none');
				$('.w_h').eq(h_c-1).css('display', 'block');
			};
		};
	});





	if ($(document).width() <= 991){
		$('.mobile_menu').click(function(){
			$('.hamburger').toggleClass('is-active');
			$('.menu').toggle();
			$('.active:eq(0)').click(function () {
				$('.submenu:eq(0)').toggle();
			});
			$('.active:eq(1)').click(function () {
				$('.active:eq(1) a:last').css('border-bottom','1px solid #dadae1');
				$('.submenu:eq(1)').toggle();
				$('.submenu:eq(0)').toggle();
			});
			$('.active:eq(2)').click(function () {
				$('.active:eq(2) li:first a').css('border-top','1px solid #dadae1');
				$('.submenu:eq(2)').toggle();
				$('.submenu:eq(0)').toggle();
			});
		});
	}
	else{
		$('.active:eq(0), .submenu:eq(0)').mouseover(function() {
			$('.submenu:eq(0)').css('display', 'block');
			$('.submenu:eq(0)').mouseout(function(){
				$('.submenu:eq(0)').css('display', 'none');
			});
			$('.active:eq(1), .submenu:eq(1)').mouseover(function() {
				$('.submenu:eq(1)').css('display', 'block');
				$('.submenu:eq(0)').css('display', 'block');
			}).mouseout(function(){
				$('.submenu:eq(1)').css('display', 'none');
				$('.submenu:eq(0)').css('display', 'none');
			});
			$('.active:eq(2), .submenu:eq(2)').mouseover(function() {
				$('.submenu:eq(2)').css('display', 'block');
				$('.submenu:eq(0)').css('display', 'block');
			}).mouseout(function(){
				$('.submenu:eq(2)').css('display', 'none');
				$('.submenu:eq(0)').css('display', 'none');
			});
			$('.active:eq(0)').mouseout(function(){
				$('.submenu:eq(0)').css('display', 'none');
			});
		});
	};
	




	$('.header .write').click(function () {
		$('.header .block_write').toggle();
	});








	for(var i=0; i<5; i++){
		card_text = $('.cards .h2:eq('+i+')').text();
		card_text = card_text.replace(' ', '<br>');
		$('.cards .h2:eq('+i+')').html(card_text);
	};



	$('.map:eq(1)').click(function () {
		$('.map:eq(1)').css('background-color','#fff');
		$('.map:eq(1)').css('border-bottom','none');
		$('.map:eq(1) p').css('background-image','url("/img/m_i_r_a.png")');
		$('.map:eq(1) p').css('color','#d92929');
		$('.map:eq(0)').css('background-color','#ebeaf2');
		$('.map:eq(0)').css('border-bottom','1px solid #a5aac4');
		$('.map:eq(0) p').css('background-image','url("/img/m_i_l.png")');
		$('.map:eq(0) p').css('color','#303864');
		$('.maps img').attr('src','img/m_i_2.jpg');

		$('.map:eq(0)').click(function () {
			$('.map:eq(0)').css('background-color','#fff');
			$('.map:eq(0)').css('border-bottom','none');
			$('.map:eq(0) p').css('background-image','url("/img/m_i_l_a.png")');
			$('.map:eq(0) p').css('color','#d92929');
			$('.map:eq(1)').css('background-color','#ebeaf2');
			$('.map:eq(1)').css('border-bottom','1px solid #a5aac4');
			$('.map:eq(1) p').css('background-image','url("/img/m_i_r.png")');
			$('.map:eq(1) p').css('color','#303864');
			$('.maps img').attr('src','img/m_i_1.jpg');
		});
	});






	if ($(window).width() <= 458){
		$('.map:eq(0) p').text('На карте');
		$('.map:eq(1) p').text('На схеме');
	};




	if ($(document).width() > 991){
		for(var i=0; i<3; i++){
			card_text = $('.slider .cost:eq('+i+')').text();
			card_text = card_text.replace(' ', '<br>');
			$('.slider .cost:eq('+i+')').html(card_text);
		};
	}

	if ($(window).width() <= 701){
		$('.footer .development').text('');
	};

});