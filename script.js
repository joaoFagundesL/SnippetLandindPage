const menu = document.querySelector('.menu');
let sideMenu = document.querySelector('.header-info');
let body = document.querySelector('body');

menu.addEventListener('click', () => {
    body.classList.toggle('fixed');
    sideMenu.classList.toggle('opened');
});