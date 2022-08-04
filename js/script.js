"use strict";

const menu = document.querySelector(".nav__menu");
const closeMenu = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

const openMenu = function () {
  menu.classList.toggle("open");
  document.body.classList.toggle("scroll-lock");
};
hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", openMenu);
