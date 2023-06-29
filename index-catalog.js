
burgerMenuBehavior();

function burgerMenuBehavior() {
    const page = document.querySelector('.page');
    const burgerBtn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.navigation-list-c');

    burgerBtn.addEventListener('click', () => {
        page.classList.toggle('nav-open');
    });
    overlay.addEventListener('click', () => {
        page.classList.toggle('nav-open');
    });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation-link-c')) page.classList.toggle('nav-open');
    });
}
