$(document).ready(function () {
  const examples = new Swiper(".examples__slider-wrapper", {
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
  const details = new Swiper(".details__slider-wrapper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".details__button--next",
      prevEl: ".details__button--prev",
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
    if (
      document
        .querySelector(".header-top__pages")
        .classList.contains("header-top__pages--visible")
    ) {
      document
        .querySelector(".header-top__pages")
        .classList.remove("header-top__pages--visible");
    }
  });

  pages.addEventListener("click", function () {
    console.log("pages");
    document
      .querySelector(".header-top__pages")
      .classList.toggle("header-top__pages--visible");
    if (
      document
        .querySelector(".header-top__landings")
        .classList.contains("header-top__landings--visible")
    ) {
      document
        .querySelector(".header-top__landings")
        .classList.remove("header-top__landings--visible");
    }
  });

  //   var modalButton = $("[data-toggle=modal]");
  //   var closeModalButton = $(".modal__close");
  //   modalButton.on("click", openModal);
  //   closeModalButton.on("click", closeModal);

  // function openModal() {
  //   var targetModal = $(this).attr("data-href");
  //   $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  //   $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  //   document.body.classList.toggle("lock");
  // }
});
