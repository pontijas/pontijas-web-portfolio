'use strict';

const menuBtn = document.querySelector('.js-btn');
const displayMenu = document.querySelector('.js-menu');
const logoBtn = document.querySelector('.js-logo');
const displayTitle = document.querySelector('.js-title');
const collapsibleTrigger = document.querySelectorAll('.js-trigger');

function showMenu() {
  displayMenu.classList.toggle('menu-hidden');
}
function showTitle() {
  displayTitle.classList.toggle('title-hidden');
}

function updateTrigger(event) {
  let currentCollapsible = event.currentTarget.parentElement;
  if (currentCollapsible.classList.contains('collapsible__open')) {
    currentCollapsible.classList.remove('collapsible__open');
  } else {
    for (const item of collapsibleTrigger) {
      item.parentElement.classList.remove('collapsible__open');
    }
    currentCollapsible.classList.add('collapsible__open');
  }
}

for (const item of collapsibleTrigger) {
  item.addEventListener('click', updateTrigger);
}

menuBtn.addEventListener('click', showMenu);
logoBtn.addEventListener('click', showTitle);
