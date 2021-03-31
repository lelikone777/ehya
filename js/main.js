const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".examples__button--next",
    prevEl: ".examples__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    arrowLeftRight: true,
  },
});
