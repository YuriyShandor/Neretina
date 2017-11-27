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

  var products = ['people', 'bussines', 'education', 'life-style'];

  var articleToShow = 9;
    $('.article').hide().slice(0, articleToShow).show();
    $('#loadMore').click(function () {
      articleToShow = articleToShow +3;
      $('.article').hide().slice(0, articleToShow).show();
  });

  var toShow = 9;

  products.forEach(function(item) {
    $(`.article-category__${item}`).click(function(){
      $('.article-category').removeClass('article-category_active');
      $(this).addClass('article-category_active');
      $('.article').addClass('article_hidden');
      $(`.article__${item}`).removeClass('article_hidden');

      $(`.article__${item}`).hide().slice(0, toShow).show();
      $('#loadMore').click(function () {
        toShow = toShow +3;
        $(`.article__${item}`).hide().slice(0, toShow).show();
      });
    });
  });
});
