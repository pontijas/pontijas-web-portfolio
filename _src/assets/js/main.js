'use strict';

const menuBtn = document.querySelector('.js-btn');
const displayMenu = document.querySelector('.js-menu');
const logoBtn = document.querySelector('.js-logo');
const displayTitle = document.querySelector('.js-title');
const collapsibleTrigger = document.querySelectorAll('.js-trigger');
const arrow = document.querySelector('.skills__arrow');
const content = document.querySelector('.skills__content');

function showMenu() {
  displayMenu.classList.toggle('menu-hidden');
}
function showTitle() {
  displayTitle.classList.toggle('title-hidden');
}

function updateTrigger(event) {
  console.log('holiiiiiii', event.currentTarget.parentElement);
  let currentCollapsible = event.currentTarget.parentElement;
  // arrow.classList.toggle('collapsible__arrow');
  currentCollapsible.classList.toggle('collapsible__content');
}

for (const item of collapsibleTrigger) {
  item.addEventListener('click', updateTrigger);
}

menuBtn.addEventListener('click', showMenu);
logoBtn.addEventListener('mouseover', showTitle);
