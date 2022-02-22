function openNav() {
   document.querySelector(".menu").classList.toggle('active');
   document.querySelector("body").classList.toggle('lock');
};


function change(x) {
   x.classList.toggle("change");
};
/*---------------*/

const swiper = new Swiper('.banner-swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows

   // And if we need scrollbar

   loop: true,
   freeMode: false,
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: true,
   slideToClickedSlide: false,
   keyboard: {
      enabled: true,
      onIyViewport: true,
      pageUpDown: true,
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
   },
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 30,
      slideShadows: false,
   },
   autoplay: {
      delay: 5000,
   },
   speed: 1000,
});

new Swiper('.image-slider', {
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slideToClickedSlide: false,
   autoHeight: false,
   slidesPerView: 3,
   watchOverflow: true,
   spaceBetween: 0,
   slidesPerGroup: 1,
   autoplay: {
      delay: 5000,
   },
   speed: 1000,
   direction: 'horizontal',
   effect: 'slide',
   breakpoints: {
      1: {
         slidesPerView: 1,
      },
      600: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,

   centeredSlides: false,
   initialSlide: 0,
});
