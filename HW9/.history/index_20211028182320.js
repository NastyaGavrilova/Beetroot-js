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
});

var cStars = function (nowPos) {
  // У всех убираем active
  $(".stars .star").removeClass("active");

  for (var i = 0; nowPos + 1 > i; i++) {
    $(".stars .star").eq(i).toggleClass("active");
  }
};
// переменная содержит количество активных звезд
var starsCount = $(".star.active").length;

// При наведении
$(".stars .star").hover(function () {
  cStars($(this).index());
});

// При клике
$(".stars .star").click(function () {
  cStars($(this).index());
  // меняем количество по клику
  starsCount = $(".star.active").length;
});

// Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
$(".stars .star").on("mouseleave", function () {
  cStars(+starsCount - 1);
});
