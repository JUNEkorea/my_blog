function TabBox__init() {
  $('[data-tab-head-item-name]').click(function () {
    var $this = $(this);
    var tabName = $this.attr('data-tab-name');
    var itemName = $this.attr('data-tab-head-item-name');
    // [for]
    // 모든 것을 숨기고
    $('[data-tab-name="' + tabName + '"]').removeClass('active');

    $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
    $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
  });
}

function MySliderBox1__init() {
	var $box = $('.my-slider-box-1');

	var $slider = $box.find(' > .slides').slick({
		arrows:true,
		prevArrow:$('.my-slider-box-1 > .btns > .btn-left'),
		nextArrow:$('.my-slider-box-1 > .btns > .btn-right'),
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		adaptiveHeight: true
	});

	$box.find('> .btns > .btn-play-and-stop').on('click', function() {
		if($(this).hasClass("play")){
			$slider.slick("slickPlay");
			$(this).removeClass("play");
			$(this).html('<i class="fas fa-pause"></i>');
		} else {
			$slider.slick("slickPause");
			$(this).addClass("play");
			$(this).html('<i class="fas fa-play"></i>');
		}
	});
}

//찾아서 적용시켜준다. 꼭 써주고 함수 계속 추가.
$(function () {
  TabBox__init();
  MySliderBox1__init();
});