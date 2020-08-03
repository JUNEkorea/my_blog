// 페이지1 아울캐러셀
function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            }
        },
        loop: true,
        dots: true,
        /*아래점*/
        nav: true,
        navText: ['<span class="btn-left"></span>', '<span class="btn-right"></span>'],
        animateOut: 'fadeOut' /*클릭시 화면이 점점 fade out*/

    });
}
MySlider1__init();

// 페이지2 유투브 연결.
function YoutubePopup__show(videoId) {
    $('html').addClass('youtube-popup-actived');
    $('.youtube-popup > iframe').attr('src', 'https://www.youtube.com/embed/' + videoId)
}

function YoutubePopup__hide() {
    $('html').removeClass('youtube-popup-actived');
}

$(function () {
    $('.video-box > img').click(function () {
        YoutubePopup__show('YdGtxXYIFQc');
    });

    $('.youtube-popup-bg').click(YoutubePopup__hide);
});

// 4페이지
function SliderX__init(selector) {
    var $slider = $(selector);

    var $pages = $slider.find('.page-box > .pages');

    var slidesCount = $slider.find('.slides > div').length;
    var currentIndex = 0;

    $slider.data('slider-x-slidesCount', slidesCount);
    $slider.data('slider-x-currentIndex', currentIndex);

    $slider.find('.slides > div').each(function (index, el) {
        var $el = $(el)
        var type1 = $el.attr('data-slider-x-img-type-1');
        var imgUrl = $el.attr('data-slider-x-img-url');

        $el.css('background-image', 'url(' + imgUrl + ')');

        var $btn = $('<div></div>');
        $btn.css('background-image', 'url(' + imgUrl + ')');
        $btn.attr('data-slider-x-img-type-1', type1);
        $pages.append($btn);
    });

    $pages.find(' > div').click(function () {
        SliderX__show($slider, $(this).index());
    });

    $slider.find('.side-btns > div:first-child').click(function () {
        SliderX__movePrev($slider);
    });

    $slider.find('.side-btns > div:last-child').click(function () {
        SliderX__moveNext($slider);
    });

    $slider.find('.page-box > :first-child').click(function () {
        SliderX__movePrevGroup($slider);
    });

    $slider.find('.page-box > :last-child').click(function () {
        SliderX__moveNextGroup($slider);
    });

    SliderX__show($slider, 0);
}

function SliderX__movePrev($slider) {
    var postIndex = $slider.data('slider-x-currentIndex') - 1;
    var slidesCount = $slider.data('slider-x-slidesCount');

    if (postIndex < 0) {
        postIndex = slidesCount - 1;
    }

    SliderX__show($slider, postIndex);
}

function SliderX__moveNext($slider) {
    var postIndex = $slider.data('slider-x-currentIndex') + 1;
    var slidesCount = $slider.data('slider-x-slidesCount');

    if (postIndex + 1 > slidesCount) {
        postIndex = 0;
    }

    SliderX__show($slider, postIndex);
}

function SliderX__movePrevGroup($slider) {
    var currentIndex = $slider.data('slider-x-currentIndex');

    // 현재 활성화된 녀석
    var $current = $slider.find('.slides > div').eq(currentIndex);

    var type1 = $current.attr('data-slider-x-img-type-1');

    // 이전그룹의 마지막 녀석 찾기
    var $post = $current.parent().children('[data-slider-x-img-type-1="' + type1 + '"]').first().prev();

    if ($post.length > 0) {
        var type1OfPost = $post.attr('data-slider-x-img-type-1');

        $post = $current.parent().children('[data-slider-x-img-type-1="' + type1OfPost + '"]').first();
    } else {
        $post = $current.parent().children().last();

        var type1OfPost = $post.attr('data-slider-x-img-type-1');

        $post = $current.parent().children('[data-slider-x-img-type-1="' + type1OfPost + '"]').first();
    }

    var postIndex = $post.index();

    SliderX__show($slider, postIndex);
}

function SliderX__moveNextGroup($slider) {
    var currentIndex = $slider.data('slider-x-currentIndex');

    // 현재 활성화된 녀석
    var $current = $slider.find('.slides > div').eq(currentIndex);

    var type1 = $current.attr('data-slider-x-img-type-1');

    // 다음그룹의 첫번째 찾기
    var $post = $current.parent().children('[data-slider-x-img-type-1="' + type1 + '"]').last().next();

    if ($post.length == 0) {
        $post = $current.parent().children().first();
    }

    var postIndex = $post.index();

    SliderX__show($slider, postIndex);
}

function SliderX__show($slider, postIndex) {
    var currentIndex = $slider.data('slider-x-currentIndex');
    var $current = $slider.find('.slides > div').eq(currentIndex);
    var $post = $slider.find('.slides > div').eq(postIndex);

    var type1 = $post.attr('data-slider-x-img-type-1');

    $current.removeClass('active');
    $post.addClass('active');

    $slider.data('slider-x-currentIndex', postIndex);

    $slider.find('.page-box > .pages > div').removeClass('active');
    $slider.find('.page-box > .pages > div').eq(postIndex).addClass('active');

    $slider.find('.page-box > .pages > div').removeClass('visible');
    $slider.find('.page-box > .pages > div[data-slider-x-img-type-1="' + type1 + '"]').addClass('visible');
}

$(function () {
    SliderX__init('.slider-x-1');
});

// 5페이지
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






$(function () {
    MySlider1__init();
    SliderX__init();
    TabBox__init();
    TabBox__init();
});
