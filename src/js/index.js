import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.bloc2__swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  parallax: true,
  speed: 400,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },


  // If we need pagination
  pagination: {
    el: '.fraction',
    type: 'fraction',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }

});

let OpenBtn = document.querySelector(".header__btn");
let Openclose = document.querySelector(".header__btn-close");
let navOpen = document.querySelector(".nav-mob")
let hidden = document.querySelector("body")

document.body.addEventListener('click', oneclick);

function oneclick(event) {
  if (event.target.closest('.header__btn')) {
    navOpen.classList.toggle('nav-active')
    OpenBtn.classList.toggle('btn-active')
    Openclose.classList.toggle('btn-closeactive')
    hidden.classList.toggle('hidden')
  }
  else if (!event.target.closest('.nav-active')) {
    navOpen.classList.remove('nav-active')
    OpenBtn.classList.remove('btn-active')
    Openclose.classList.remove('btn-closeactive')
    hidden.classList.remove('hidden')
  }
}
