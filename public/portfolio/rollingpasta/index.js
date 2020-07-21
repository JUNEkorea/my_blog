$(function() {
    $.scrollify({
        section: ".pages > .page",
        updateHash: true,
        touchScroll: true,
        setHeights: false,
        /* 페이지높이자동100%되지않도록. */
        before: function(i, panels) { /* 페이지집입하기전에 */
            var ref = panels[i].attr("data-section-name");
            $('.top-bar .menu-box-1 > ul > li').removeClass('active');
            $('.top-bar .menu-box-1 > ul > li.' + ref + '-menu-item').addClass('active');
            /* ref=> page-2,3,4,5,6*/
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            //파지네이션 액티브될때 탑바에 있는 a::after 밑줄효과 짠 저절로 움직임. 탑바를 클릭하지 않아도.
            if (ref != 'page-1') {
                setTimeout(function() {
                    $('.top-bar').addClass('hover');
                }, 600);
            } else {
                setTimeout(function() {
                    $('.top-bar').removeClass('hover');
                }, 600);
            }
        },
        afterRender: function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".pages > .page").each(function(i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".page-indicator-box").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
            $('.top-bar .menu-box-1 > ul > li > a').on("click", $.scrollify.move);
            $('.scroll-down-icon-box > a').on("click", $.scrollify.move);
        }
    });
});
//아울 캐러셀
$('.my-carousel-1 > .owl-carousel').owlCarousel({
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<span class="btn-left"></span>', '<span class="btn-right"></span>'],
    /* 본사이트에서 복사해옴 */
    responsive: {
        0: {
            items: 1
        }
    },
    autoplayHoverPause: true
});

$('.popup-box-1 .btn-close').click(function() {
    $(this).closest('.popup-box-1').remove();

    $('.page-1 .scroll-down-icon-box').addClass('active'); /* 팝업창 사라지면 스크롤다운아이콘 움직임 */
});

setTimeout(function() {
    $.scrollify.move("#page-2");
}, 300);