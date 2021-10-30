$(document).ready(function () {
  //таб на элемент листа добавляет класс active и удвляет класс disable
  $(".c-navigation__li").click(function () {
    $(this).addClass("active").removeClass("disable");
    // для элмента .c-navigation__li ищем соседние элементы
    // И им удаляем класс active и добавляем класс disable
    $(this).siblings().removeClass("active").addClass("disable");
    // для класса tab добвляем стиль и возвращем єлемент c индексом
    // и этому элементу добвляем стиль
    $(".tab")
      .css("display", "none")
      .eq($(this).index())
      .css("display", "block");
  });
});

let cStars = function (nowPos) {
  // У всех убираем active
  $(".c-container__stars .star").removeClass("active-star");

  for (let i = 0; nowPos + 1 > i; i++) {
    $(".c-container__stars .star").eq(i).toggleClass("active-star");
  }
};
//количество активных звезд
var starsCount = $(".c-container__stars.active-star").length;

$(".c-container__stars .star").hover(function () {
  cStars($(this).index());
});

$(".c-container__stars .star").click(function () {
  cStars($(this).index());
  // меняем количество по клику
  starsCount = $(".star.active-star").length;
});

// Как только отводим мышку, возвращаем количество активных звезд, которые были изначально
$(".c-container__stars .star").on("mouseleave", function () {
  cStars(+starsCount - 1);
});

$(".c-wheretobuy__select").on("click", ".select__head", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).next().fadeOut();
  } else {
    $(".select__head").removeClass("open");
    $(".select__list").fadeOut();
    $(this).addClass("open");
    $(this).next().fadeIn();
  }
});
$(".c-wheretobuy__select").on("click", ".select__item", function () {
  $(".select__head").removeClass("open");
  $(this).parent().fadeOut();
  $(this).parent().prev().text($(this).text());
  $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
  if (!$(e.target).closest(".c-wheretobuy__select").length) {
    $(".select__head").removeClass("open");
    $(".select__list").fadeOut();
  }
});
