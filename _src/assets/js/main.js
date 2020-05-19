'use strict';

console.log('holi mundi');

const menuBtn = document.querySelector('.js-btn');
const displayMenu = document.querySelector('.js-menu');
const logoBtn = document.querySelector('.js-logo');
const displayTitle = document.querySelector('.js-title');

function showMenu() {
  displayMenu.classList.toggle('menu-hidden');
}
function showTitle() {
  displayTitle.classList.toggle('title-hidden');
}

menuBtn.addEventListener('click', showMenu);
logoBtn.addEventListener('click', showTitle);
