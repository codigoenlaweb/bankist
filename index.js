/* query selector */
const menu = document.querySelector('#menu-responsive');
const overlay = document.querySelector('.overlay');
const overlayGray = document.querySelector('.overlay--gray');
const listMenu = document.querySelector('.nav__right-menu')
const account = document.querySelectorAll('#openAcount');
const accountFree = document.querySelector('#openAcount-form');
const overlayAccount = document.querySelector('.modal__open-acount');
const btnClose = document.querySelector('.btn__close-acount');
const links = document.querySelectorAll(".scrool");

/* end query selector */


/* arrow fuction */

// open the menu when click
const openaMenu = () => {
    listMenu.classList.remove('hidden');
    setTimeout( () => {
        listMenu.classList.remove('opacity0');
    }, 0)
    overlay.classList.remove('hidden');
    
} 

// closed the menu when click
const closeMenu = () => {
    listMenu.classList.add('opacity0');
    setTimeout( () => {
        listMenu.classList.add('hidden');
    }, 500)
    overlay.classList.add('hidden');
}

// open the form acount when click
const openacount = () => {
    overlayAccount.classList.remove('hidden');
    overlayGray.classList.remove('hidden');
    setTimeout( () => {
        overlayAccount.classList.remove('opacity0');  
        overlayGray.classList.remove('opacity0');
    }, 0)
}

// closed the form acount when click overlay gray
const closeForm = () => {
    overlayAccount.classList.add('opacity0');
    setTimeout( () => {
        overlayAccount.classList.add('hidden');
        overlayGray.classList.remove('opacity0');
    }, 500)
    overlayGray.classList.add('hidden');
}



function scrolling(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href);
    offsetTop.scrollIntoView({behavior: "smooth"});
  }

/* end arrow fuction */




/* add event listener */

// menu amburger
menu.addEventListener('click', openaMenu);
overlay.addEventListener('click', closeMenu);

// click btn open acount
account.forEach( (account) => {
    account.addEventListener('click', openacount);
});
// click btn X or overlayGray closw acount
overlayGray.addEventListener('click', closeForm);
btnClose.addEventListener('click', closeForm);

// scroll in links
links.forEach( (link) =>{
    link.addEventListener("click", scrolling)
})

/* end add event listener  */


