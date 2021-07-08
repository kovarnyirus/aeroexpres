'use strict'

var swiper = new Swiper('.service-slider .swiper-container', {
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

var topSlider = new Swiper('.top-slider .swiper-container', {
  slidesPerView: 'auto',
  loop: true
});

window.addEventListener('resize', destroySlider)

function destroySlider(evt){
  if (window.innerWidth > 768){
    topSlider.destroy(true, true)
  }
}

destroySlider()

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

$('.popup-with-move-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: true,
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});

$('.input.email .input__input').inputmask({
  regex: "[A-Za-z0-9@._\u0410-]*"
});


