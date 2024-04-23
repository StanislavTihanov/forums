"use strict"

//------------------------------------------------------------------------появление бекграунда у шапки
window.addEventListener('scroll', () => {
  if(scrollY > 50) {
    document.querySelector('.header').classList.add('bg_active')
  } else {
    document.querySelector('.header').classList.remove('bg_active')
  }
})
//------------------------------------------------------------------------появление бекграунда у шапки

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.header__burger-wrapper');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его

//------------------------------------------------------------------------Слайдеры
const servicesSlider = new Swiper('.services__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const customersClientsSlider = new Swiper('.customers-clients__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//------------------------------------------------------------------------Слайдеры

//------------------------------------------------------------------------код для открытия блоков на странице мероприятия
//---------достали все нужные элементы
const secondaryButtons = document.querySelectorAll('.secondary-button');
const sideBlocks = document.querySelectorAll('.side-block');
const elementsClose = document.querySelectorAll('.side-block-close');

//--------------------------этот код открывает блок
secondaryButtons.forEach((button, index) => {
 button.addEventListener('click', () => {
    sideBlocks[index].classList.add('side-open');
 });
});
//--------------------------этот код закрывает блок 
document.addEventListener('click', (event) => {
 if (event.target.matches('.side-block-close')) {
    const sideBlock = event.target.closest('.side-block');
    if (sideBlock) {
      sideBlock.classList.remove('side-open');
    }
 }
});
//------------------------------------------------------------------------код для открытия блоков на странице мероприятия