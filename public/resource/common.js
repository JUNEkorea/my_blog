function MobileSideBar__toggle() {
  var $btn = $('.btn-toggle-mobile-side-bar');
  var $mobileSideBar = $('.mobile-side-bar');
  var $mobileSideBarBg = $('.mobile-side-bar-bg');

  if ( $btn.hasClass('active') ) {
      $btn.removeClass('active');
      $mobileSideBar.removeClass('active');
      $mobileSideBarBg.removeClass('active');
  }
  else {
      $btn.addClass('active');
      $mobileSideBar.addClass('active');
      $mobileSideBarBg.addClass('active');
  }
}

function MobileSideBar__init() {
  $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);
}

$(function() {
  MobileSideBar__init();
});