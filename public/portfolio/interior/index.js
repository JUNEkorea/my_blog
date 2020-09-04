// 탑바 스크롤할때 내려오는 JS
var $window = $(window);
var $html = $('html');

function Window__init() {
    $window.scroll(function() {
        var scrollTop = $window.scrollTop();

        if (scrollTop > 0) {
            $html.addClass('scroll-top-0-up');
        } else {
            $html.removeClass('scroll-top-0-up');
        }
    });
}
$(function() {
    Window__init();
});
//메인 속도바
function SliderP__init(selector) {
    var $slider = $(selector);

    var $slides = $slider.find('.slides > div');
    var slidesCount = $slides.length;

    var $totalCount = $slider.find('.index-box > :last-child');
    $totalCount.text(slidesCount);

    var currentIndex = 0;
    var $current = $slider.find(' > .slides > div.active');
    if ($current.length > 0) {
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

    if (postIndex + 1 > slidesCount) {
        postIndex = 0;
    }

    SliderP__show($slider, postIndex);
}

function SliderP__movePrev($slider) {
    var currentIndex = $slider.data('slider-p-currentIndex');
    var postIndex = currentIndex - 1;
    var slidesCount = $slider.data('slider-p-slidesCount');

    if (postIndex < 0) {
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
        width: '100%'
    }, animateDuration, function() {
        SliderP__moveNext($slider);
    });
}

function SliderP__stopAnimate($slider) {
    var $stick = $slider.find('.progress-bar > .stick');

    $stick.stop();
}

SliderP__init('.slider-p-1');

// 풀페이지
function Fullpage() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        scrollBar: true,
        menu: '#menu',
        controlArrows: true,
        anchors: ['anchor1', 'anchor2', 'anchor3'],

    })
}


$(function() {
    Window__init();
    Fullpage();
    SliderP__init('.slider-p-1')
})

$(function() {
    Window__init();
    Fullpage();
    SliderP__init('.slider-p-1');
    Sticker.init('.sticker');
})