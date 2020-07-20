$(function() {
    $.scrollify({
        section: ".pages > .page",
        updateHash: true,
        touchScroll: true,
        setHeights: false,
        before: function(i, panels) {
            var ref = panels[i].attr("data-section-name");
            $('.top-bar .menu-box-1 > ul > li').removeClass('active');
            $('.top-bar .menu-box-1 > ul > li.' + ref + '-menu-item').addClass('active');

            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

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

$('.my-carousel-1 > .owl-carousel').owlCarousel({
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<span class="btn-left"></span>', '<span class="btn-right"></span>'],
    responsive: {
        0: {
            items: 1
        }
    },
    autoplayHoverPause: true
});

$('.popup-box-1 .btn-close').click(function() {
    $(this).closest('.popup-box-1').remove();

    $('.page-1 .scroll-down-icon-box').addClass('active');
});

setTimeout(function() {
    $.scrollify.move("#page-2");
}, 300);