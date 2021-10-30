$(document).ready(function () {
  //tab click event switcher
  $(".c-navigation__li").click(function () {
    $(this).addClass("active").removeClass("disable");
    $(this).siblings().removeClass("active").addClass("disable");
    $(".tab")
      .css("display", "none")
      .eq($(this).index())
      .css("display", "block");
  });

  // var cStars = function (nowPos) {
  //   // У всех убираем active
  //   $(".c-container__stars .star").removeClass("active-star");

  //   for (var i = 0; nowPos + 1 > i; i++) {
  //     $(".c-container__stars .star").eq(i).toggleClass("active-star");
  //   }
  // };
  // // переменная содержит количество активных звезд
  // var starsCount = $(".c-container__stars.active").length;

  // // При наведении
  // $(".c-container__stars .star").hover(function () {
  //   cStars($(this).index());
  // });

  // // При клике
  // $(".c-container__stars .star").click(function () {
  //   cStars($(this).index());
  //   // меняем количество по клику
  //   starsCount = $(".star.active-star").length;
  // });

  // // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
  // $(".c-container__stars .star").on("mouseleave", function () {
  //   cStars(+starsCount - 1);
  // });
});
