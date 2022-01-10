const menu = document.querySelector('#menu-responsive');
const overlay = document.querySelector('.overlay');
const listMenu = document.querySelector('.nav__right-menu')


const open = () => {
    listMenu.classList.remove('opacity0');
    overlay.classList.remove('hidden')
    
}

const close = () => {
    listMenu.classList.add('opacity0');
    overlay.classList.add('hidden')
}

menu.addEventListener('click', open);
overlay.addEventListener('click', close);

