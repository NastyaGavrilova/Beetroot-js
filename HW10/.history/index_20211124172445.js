const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 4,

  loop: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // effect: "cube",
});
let currentSlides = swiper.slides[swiper.realIndex + 1];
currentSlides.classList.add("lasted");

const swiperPrevBtn = document.getElementById("js-swiper-prev");
swiperPrevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});

const swiperNextBtn = document.getElementById("js-swiper-next");
swiperNextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
