const button_up = document.querySelector('.button_up');

button_up.addEventListener('mousedown', function() {
    window.scrollTo(0, 0)
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 70) {
        button_up.classList.add('button_up_show');
    } else {
        button_up.classList.remove('button_up_show');
    }
});

const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const item = document.querySelectorAll('.header__menu__item');

hamburger.addEventListener('mousedown', function() {
    toggleMenu();
});

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        toggleMenu();
    });
}

function toggleMenu() {
    hamburger.classList.toggle('header__hamburger_active');
    menu.classList.toggle('header__menu_show');
    body.classList.toggle('body_overflow');
}

document.querySelector('body').classList.add('loaded');