$(function() {

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

    function YoutubePopup__show(videoId) {
        $('html').addClass('youtube-popup-actived');
        $('.youtube-popup > iframe').attr('src', 'https://www.youtube.com/embed/' + videoId)
    }

    function YoutubePopup__hide() {
        $('html').removeClass('youtube-popup-actived');
    }

    $(function() {
        $('.video-box > img').click(function() {
            YoutubePopup__show('YdGtxXYIFQc');
        });

        $('.youtube-popup-bg').click(YoutubePopup__hide);
    });



});