function SliderP__init(selector) {
	var $slider = $(selector);

	var $slides = $slider.find('.slides > div');
	var slidesCount = $slides.length;

	var $totalCount = $slider.find('.index-box > :last-child');
	$totalCount.text(slidesCount);

	var currentIndex = 0;
	var $current = $slider.find(' > .slides > div.active');
	if ( $current.length > 0 ) {
		currentIndex = $current.index();
	}

	$slider.data('slider-p-slidesCount', slidesCount);
	$slider.data('slider-p-currentIndex', currentIndex);

	$slider.find('.control-box > button:first-child').click(function() {
		SliderP__movePrev($slider);
	});

	$slider.find('.control-box > button:nth-child(2)').click(function() {
		SliderP__stopAnimate($slider);
	});

	$slider.find('.control-box > button:last-child').click(function() {
		SliderP__moveNext($slider);
	});

	SliderP__show($slider, 0);
}

function SliderP__moveNext($slider) {
	var currentIndex = $slider.data('slider-p-currentIndex');
	var postIndex = currentIndex + 1;
	var slidesCount = $slider.data('slider-p-slidesCount');

	if ( postIndex + 1 > slidesCount ) {
		postIndex = 0;
	}

	SliderP__show($slider, postIndex);
}

function SliderP__movePrev($slider) {
	var currentIndex = $slider.data('slider-p-currentIndex');
	var postIndex = currentIndex - 1;
	var slidesCount = $slider.data('slider-p-slidesCount');

	if ( postIndex < 0 ) {
		postIndex = slidesCount - 1;
	}

	SliderP__show($slider, postIndex);
}

function SliderP__show($slider, postIndex) {
	var $stick = $slider.find('.progress-bar > .stick');
	$stick.css('width', 0);

	var currentIndex = $slider.data('slider-p-currentIndex');
	var slidesCount = $slider.data('slider-p-slidesCount');
	var $current = $slider.find(' > .slides > div').eq(currentIndex);
	var $post = $slider.find(' > .slides > div').eq(postIndex);

	$slider.data('slider-p-currentIndex', postIndex);

	$current.removeClass('active');
	$post.addClass('active');

	var $currentIndex = $slider.find('.index-box > :first-child');
	$currentIndex.text(postIndex + 1);

	SliderP__startAnimate($slider);
}

function SliderP__startAnimate($slider) {
	var $stick = $slider.find('.progress-bar > .stick');

	var animateDuration = parseInt($slider.attr('data-slider-p-animate-duration'));

	$stick.stop().animate({
		width:'100%'
	}, animateDuration, function() {
		SliderP__moveNext($slider);
	});
}

function SliderP__stopAnimate($slider) {
	var $stick = $slider.find('.progress-bar > .stick');

	$stick.stop();
}

SliderP__init('.slider-p-1');

new fullpage('#fullpage', {
	sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6','yellow'],
	navigation:true,
	navigationPosition: 'left',
	scrollBar:true,
	menu: '#menu',
	controlArrows: true,
	anchors: ['anchor1', 'anchor2', 'anchor3'],	
});





$(function(){
    SliderP__show($slider, 0);
    SliderP__show($slider, postIndex);
    SliderP__startAnimate($slider);
    SliderP__init('.slider-p-1');
});