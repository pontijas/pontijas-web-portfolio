'use strict';

console.log('holi mundi');

const menuBtn = document.querySelector('.js-btn');
const displayMenu = document.querySelector('.js-menu');

function showMenu() {
  console.log('me han clickado');
  displayMenu.classList.toggle('menu-hidden');
}

menuBtn.addEventListener('click', showMenu);
