var button = document.querySelector(".js-button");
var popup = document.querySelector(".modal");

var mainNav = document.querySelector('.main-nav');
var navButtonOpened = document.querySelector('.main-nav--opened');
var navButtonClosed = document.querySelector('.main-nav--closed');
var buttonOpenMenu = document.querySelector('.main-nav__toggle');
var openMenu = document.querySelector('.main-nav__wrapper--opened');
var closeMenu = document.querySelector('.main-nav__wrapper--closed');
var mainNavWrapper = document.querySelector('.main-nav__wrapper');

button.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal--active");
  popup.classList.remove("modal-hidden");
});

mainNav.classList.remove('main-nav--nojs');

buttonOpenMenu.addEventListener("click", function(evt){
  evt.preventDefault();
  if(mainNav.classList.contains('main-nav--closed')){
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    mainNavWrapper.classList.remove("main-nav__wrapper--closed");
    mainNavWrapper.classList.add("main-nav__wrapper--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
    mainNavWrapper.classList.remove("main-nav__wrapper--opened");
    mainNavWrapper.classList.add("main-nav__wrapper--closed")
  }
});
