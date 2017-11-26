$(document).ready(function() {
  var $menu = $(".header-nav");
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 100 && $menu.hasClass("header-nav_default") ){
      $menu.removeClass("header-nav_default").addClass("header-nav_fixed");
    } else if($(this).scrollTop() <= 100 && $menu.hasClass("header-nav_fixed")) {
      $menu.removeClass("header-nav_fixed").addClass("header-nav_default");
    }
  });//scroll


  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  var products = ['all', 'print-design', 'animation', 'art', 'web-design', 'photography', 'video'];

  $('.works-categories__category_all').addClass('works-categories__category_active');

  products.forEach(function(item) {
    $(`.works-categories__category_${item}`).click(function(){
      $('.works-categories__category').removeClass('works-categories__category_active');
      $(this).addClass('works-categories__category_active');
      $('.work__all').addClass('work-hidden');
      $(`.work__${item}`).removeClass('work-hidden');
    });
  });
});
