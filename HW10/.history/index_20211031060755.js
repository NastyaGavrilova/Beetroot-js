const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  // effect: "cube",
});

const swiperPrevBtn = document.getElementById("js-swiper-prev");
swiperPrevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});

const swiperNextBtn = document.getElementById("js-swiper-next");
swiperNextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
