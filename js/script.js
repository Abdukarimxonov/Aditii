
function openNav() {
   document.querySelector(".menu").classList.toggle('active');
   document.querySelector("body").classList.toggle('lock');
};


function change(x) {
   x.classList.toggle("change");
};
/*---------------*/

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
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
   autoHeight: true,
});

function openNav() {
   document.querySelector(".menu").classList.toggle('active');
   document.querySelector("body").classList.toggle('lock');
};


function change(x) {
   x.classList.toggle("change");
};
/*---------------*/

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
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

