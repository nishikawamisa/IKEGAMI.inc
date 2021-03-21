//左右からフェードイン(short)
$(function(){
	$(window).scroll(function (){
		$('.fadein-right').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.fadein-left').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});
});

//左右からフェードイン(long)
$(function(){
	$(window).scroll(function (){
		$('.fadein-right2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin2');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.fadein-left2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin2');
			}
		});
	});
});

//スクロールでメニューの文字色変更
jQuery(window).on('scroll', function () {
  if (jQuery('.menu-button').height() < jQuery(this).scrollTop()) {
      jQuery('.menu-button').addClass('change-color');
  } else {
      jQuery('.menu-button').removeClass('change-color');
  }
});
jQuery(window).on('scroll', function () {
  if (jQuery('.menu-ruby').height() < jQuery(this).scrollTop()) {
      jQuery('.menu-ruby').addClass('change-color');
  } else {
      jQuery('.menu-ruby').removeClass('change-color');
  }
});


//下からフェードイン
$(function(){
  $(window).scroll(function (){
      $('.fade').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight +150){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});



