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

  var products = ['people', 'bussines', 'education', 'life-style'];

  products.forEach(function(item) {
    $(`.article-category__${item}`).click(function(){
      $('.article-category').removeClass('article-category_active');
      $(this).addClass('article-category_active');
      $('.article').addClass('article_hidden');
      $(`.article__${item}`).removeClass('article_hidden');
    });
  });

  // var articleAmount = $(".article").size();
  //   x=6;
  //   $('.article:lt('+x+')').show();
  //   $('#loadMore').click(function () {
  //       x= (x+3 <= articleAmount) ? x+3 : articleAmount;
  //       $('.article:lt('+x+')').show();
  //   });

  // $(".article").slice(0, 4).show();
  //   $("#loadMore").on('click', function (e) {
  //       e.preventDefault();
  //       $(".article:hidden").slice(0, 4).slideDown();
  //       if ($(".article:hidden").length == 0) {
  //           $("#load").fadeOut('slow');
  //       }
  //       $('html,body').animate({
  //           scrollTop: $(this).offset().top
  //       }, 1500);
  //   });

  size_li = $(".article").size();
    x=3;
    $('.article:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('.article:lt('+x+')').show();
         $('#showLess').show();
        if(x == size_li){
            $('#loadMore').hide();
        }
    });
});
