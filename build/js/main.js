'use strict'

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let mobileMenuToggle = document.querySelector('.header__menu-toggle')
let mainNav = document.querySelector('.main-nav')
mobileMenuToggle.addEventListener('click', function (evt){
  mainNav.classList.toggle('open')
  mobileMenuToggle.classList.toggle('open')
})

function clearInput(element) {
  element.target.closest('.input').querySelector('input').value = ""
}

let allInputClear = document.querySelectorAll('.input__clear')

allInputClear.forEach(function (item){
  item.addEventListener('click', clearInput)
})
