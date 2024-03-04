let body = document.querySelector("body")
let birgi = document.querySelectorAll(".spec-item")
let podlist = document.querySelector(".header__pod-list")
let headerDecor = document.querySelector(".header__item_decor")
let dropList = document.querySelector(".header__list")
let close = document.querySelector(".header__close")

document.addEventListener("click", dropMenu)

function dropMenu(event) {
  if (event.target.closest('.spec-item')) {
    podlist.classList.toggle('podlist-active')
    headerDecor.classList.toggle('headerDecor-active')
  }

  else {
    podlist.classList.remove('podlist-active')
    headerDecor.classList.remove('headerDecor-active')
  }

  if (event.target.closest('.header__burger-menu')) {
    dropList.classList.toggle('header__list-active')
    body.classList.toggle('body_hidden')
  } else if
    (!event.target.closest('.header__list')) {
    dropList.classList.remove('header__list-active')
    body.classList.remove('body_hidden')
  }

  if (event.target.closest('.header__close')) {
    dropList.classList.remove('header__list-active')
    body.classList.remove('body_hidden')
  }

}


// swiper-slider

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper = new Swiper('.myswiper', {
  // Опции слайдера

  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 500,
  keyboard: {
    enabled: true,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  loop: true,

}); 