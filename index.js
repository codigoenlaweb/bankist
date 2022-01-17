/* query selector */
const menu = document.querySelector('#menu-responsive');
const overlay = document.querySelector('.overlay');
const listMenu = document.querySelector('.nav__right-menu')
const account = document.querySelector('#openAcount');
const overlayAccount = document.querySelector('.modal__open-acount');

/* end query selector */


/* arrow fuction */

// open the menu when touch
const openaMenu = () => {
    listMenu.classList.remove('hidden');
    setTimeout( () => {
        listMenu.classList.remove('opacity0');
    }, 0)
    overlay.classList.remove('hidden');
    
} 

// closed the menu when touch
const closeMenu = () => {
    listMenu.classList.add('opacity0');
    setTimeout( () => {
        listMenu.classList.add('hidden');
    }, 2500)
    overlay.classList.add('hidden');
}

const openacount = () => {
    overlayAccount.classList.remove('hidden');
    setTimeout( () => {
        overlayAccount.classList.remove('opacity0');  
    }, 0)
    overlay.classList.remove('hidden');
}

//



/* end arrow fuction */


/* add event listener */
menu.addEventListener('click', openaMenu);
overlay.addEventListener('click', closeMenu);

account.addEventListener('click', openacount);
overlay.addEventListener('click', closeMenu);

/* end add event listener */