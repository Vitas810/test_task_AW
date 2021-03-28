const flowersSlider = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 54,
    snapOnRelease: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //   },
  //   // when window width is >= 992px
  //   992: {
  //     slidesPerView: 4,
  //   },
  // },
});
