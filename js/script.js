$(document).ready(function() {
  $(window).scroll(function(){
    if ($(window).scrollTop()) {
       $('.header-nav').addClass('header-nav_fixed');
    }
    else {
       $('.header-nav').removeClass('header-nav_fixed');
    }
  });

  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  var products = ['__people', '__bussines', '__education', '__life-style'];

  // var articleToShow = 9;
  // $('.article').hide().slice(0, articleToShow).show();
  // $('#loadMore').click(function () {
  //   articleToShow = articleToShow +3;
  //   $('.article').hide().slice(0, articleToShow).show();
  // });
  //
  // var toShow = 9;

  var articleToShow = 9;
  $('.article').addClass('article_hidden');
  $('.article').slice(0, articleToShow).removeClass('article_hidden');
  $('#loadMore').click(function () {
    articleToShow = articleToShow +3;
    $('.article').slice(0, articleToShow).removeClass('article_hidden');
  });

  products.forEach(function(item) {
    $(`.article-category${item}`).click(function(){
      $('.article-category').removeClass('article-category_active');
      $(this).addClass('article-category_active');
      $('.article').addClass('article_hidden');
      $(`.article${item}`).removeClass('article_hidden');

      // var ToShow = 9;
      // $('.article').addClass('article_hidden');
      // $(`.article${item}`).slice(0, ToShow).removeClass('article_hidden');
      // $('#loadMore').click(function () {
      //   ToShow = ToShow +3;
      //   $(`.article${item}`).slice(0, ToShow).removeClass('article_hidden');
      // });
    });
  });
});
