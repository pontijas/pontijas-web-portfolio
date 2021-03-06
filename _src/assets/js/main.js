'use strict';

const menuBtn = document.querySelector('.js-btn');
const displayMenu = document.querySelector('.js-menu');
const logoBtn = document.querySelector('.js-logo');
const displayTitle = document.querySelector('.js-title');
const collapsibleTrigger = document.querySelectorAll('.js-trigger');

function showMenu() {
  if (displayTitle.classList.contains('title-hidden') && displayMenu.classList.contains('menu-hidden')) {
    displayMenu.classList.remove('menu-hidden');
  } else {
    displayTitle.classList.add('title-hidden');
    displayMenu.classList.toggle('menu-hidden');
  }
}
function showTitle() {
  if (!displayMenu.classList.contains('menu-hidden')) {
    displayMenu.classList.add('menu-hidden');
    displayTitle.classList.remove('title-hidden');
  } else {
    displayTitle.classList.toggle('title-hidden');
  }
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
