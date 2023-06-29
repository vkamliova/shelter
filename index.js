
burgerMenuBehavior();

function burgerMenuBehavior() {
    const page = document.querySelector('.page');
    const burgerBtn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.navigation-list');

    burgerBtn.addEventListener('click', () => {
        page.classList.toggle('nav-open');
        // menu.classList.toggle('menu-active');
    });
    overlay.addEventListener('click', () => {
        page.classList.toggle('nav-open');
    });
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation-link')) page.classList.toggle('nav-open');
    });
}