"use strict"

//------------------------------------------------------------------------появление бекграунда у шапки
window.addEventListener('scroll', () => {
  if(pageYOffset > 50) {
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

//------------------------------------------------------------------------Слайдер
$('.services__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

$('.customers-clients__slider').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 401,
      settings: {
        slidesToShow: 3,
        dots: false
      }
    },
  ]
});

const secondaryButton1 = document.querySelector('.secondary-button1');
const secondaryButton2 = document.querySelector('.secondary-button2');
const secondaryButton3 = document.querySelector('.secondary-button3');
const secondaryButton4 = document.querySelector('.secondary-button4');
const secondaryButton5 = document.querySelector('.secondary-button5');
const sideBlocks = document.querySelectorAll('.side-block');
const sideBlock1 = document.querySelector('.side-block1');
const sideBlock2 = document.querySelector('.side-block2');
const sideBlock3 = document.querySelector('.side-block3');
const sideBlock4 = document.querySelector('.side-block4');
const sideBlock5 = document.querySelector('.side-block5');

secondaryButton1.addEventListener('click', () => {
  sideBlock1.classList.add('side-open');
});
secondaryButton2.addEventListener('click', () => {
  sideBlock2.classList.add('side-open');
});
secondaryButton3.addEventListener('click', () => {
  sideBlock3.classList.add('side-open');
});
secondaryButton4.addEventListener('click', () => {
  sideBlock4.classList.add('side-open');
});
secondaryButton5.addEventListener('click', () => {
  sideBlock5.classList.add('side-open');
});
//------------------------------------------------------------------------функция закрывает side-block
sideBlocks.forEach(function (sideBlocks) {

   const elementsClose = document.querySelectorAll('.side-block-close');
   elementsClose.forEach(function(el) {
     el.addEventListener('click', function() {
       sideBlocks.classList.remove('side-open');
     });
    });
});
//------------------------------------------------------------------------функция закрывает side-block
