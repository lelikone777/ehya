$(document).ready(function () {



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

  var modalButton = document.querySelector(".header-top__button");
  var menuButton = document.querySelector(".header-top__menu-button");
  var landings = document.querySelector(".header-top__menu-link--landings");
  var pages = document.querySelector(".header-top__menu-link--pages");

  modalButton.addEventListener("click", function () {
    console.log("modal");
  });

  menuButton.addEventListener("click", function () {
    console.log("menu");
    document
      .querySelector(".header-top__menu")
      .classList.toggle("header-top__menu--visible");
  });


  landings.addEventListener("click", function () {
    console.log("landings");
    document
      .querySelector(".header-top__landings")
      .classList.toggle("header-top__landings--visible");
  });

  pages.addEventListener("click", function () {
    console.log("pages");
    document
      .querySelector(".header-top__pages")
      .classList.toggle("header-top__pages--visible");
  });
});
