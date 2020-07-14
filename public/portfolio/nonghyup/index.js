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

//찾아서 적용시켜준다. 꼭 써주고 함수 계속 추가.
$(function () {
  TabBox__init();
});