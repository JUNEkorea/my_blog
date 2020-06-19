function MobileSideBar__toggle() {
  var $btn = $('.btn-toggle-mobile-side-bar');
  var $mobileSideBar = $('.mobile-side-bar');
  var $mobileSideBarBg = $('.mobile-side-bar-bg');
  var $html = $('html');

  if ($btn.hasClass('active')) {
    // 모바일 사이드바 끄기
    $btn.removeClass('active');
    $mobileSideBar.removeClass('active');
    $mobileSideBarBg.removeClass('active');
    $html.removeClass('mobile-side-bar-actived');
  } else {
    // 모바일 사이드바 켜기
    $btn.addClass('active');
    $mobileSideBar.addClass('active');
    $mobileSideBarBg.addClass('active');
    $html.addClass('mobile-side-bar-actived');
  }
}

function MobileSideBar__init() {
  $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);

  $('.mobile-side-bar .menu-box-2 ul > li').click(function (e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    e.stopPropagation();
  });
}

function slider() {
  var $clickedBtn = $(this);
    // closest => 조상중에서 가장 가까운 엘리먼트 하나 찾아주세요.
    var $slider = $clickedBtn.closest('.sbs-slider');

    //.index() => 형제번호
    var isLeft = $clickedBtn.index() == 0;

    // find => 지역탐색
    // $currnet => 현재 active 된 녀석
    var $currnet = $slider.find('.slides > .active');
    // next => 다음 형제 가져와
    var $post = null;

    if (isLeft) {
      $post = $currnet.prev();
    } else {
      $post = $currnet.next();
    }

    if ($post.length == 0) {
      if (isLeft) {
        $post = $slider.find('.slides > div:last-child');
      } else {
        $post = $slider.find('.slides > div:first-child');
      }
    }

    $currnet.removeClass('active');
    $post.addClass('active');
}



function Slider__init() {
  $('.sbs-slider > .side-bars > div').click(slider);
  setInterval(function(){
    $('.sbs-slider > .side-bars > div:last-child').click()
  }, 5000)
}


$(function () {
  MobileSideBar__init();
  Slider__init();
});