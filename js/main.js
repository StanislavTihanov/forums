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