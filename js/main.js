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

  // var modalButton = document.querySelector(".header-top__button");
  var menuButton = document.querySelector(".header-top__menu-button");
  var landings = document.querySelector(".header-top__menu-link--landings");
  var pages = document.querySelector(".header-top__menu-link--pages");
  var landingsMenu = document.querySelector(".header-top__landings");
  var pagesMenu = document.querySelector(".header-top__pages");

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
    if (pagesMenu.classList.contains("header-top__pages--visible")) {
      pagesMenu.classList.remove("header-top__pages--visible");
    }
  });

  pages.addEventListener("click", function () {
    console.log("pages");
    document
      .querySelector(".header-top__pages")
      .classList.toggle("header-top__pages--visible");
    if (landingsMenu.classList.contains("header-top__landings--visible")) {
      document;
      landingsMenu.classList.remove("header-top__landings--visible");
    }
  });
  
  var modalButton = $("[data-toggle=modal]");
  console.log(modalButton);
  modalButton.on("click", openModal);
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);
  var modalOverlay = $(".modal__overlay");
  modalOverlay.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    document.body.classList.toggle("lock");
  }
   function closeModal(event) {
     event.preventDefault();
     var modalDialog = $(".modal__dialog");
     modalOverlay.removeClass("modal__overlay--visible");
     modalDialog.removeClass("modal__dialog--visible");
     document.body.classList.remove("lock");
   }

   $(".input-phone").mask("+7 (000) 000-00-00");
    $(".form").each(function () {
      $(this).validate({
        errorClass: "invalid",
        rules: {
          phone: {
            required: true,
            minlength: 16,
          },
          email: {
            minlength: 6,
          },
        },
        messages: {
          name: {
            required: "Напишите ваше имя",
            minlength: "минимум 2 символа",
          },
          email: {
            required: "Нужен адрес электронной почты",
            email: "Должен быть в формате: name@domain.com",
          },
          phone: {
            required: "Телефонный номер необходим",
            minlength: "Введите корректный номер телефона",
          },
        },
      });
    });
});
