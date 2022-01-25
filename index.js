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
const btnOperations1 = document.querySelector("#btn-operations--1");
const btnOperations2 = document.querySelector("#btn-operations--2");
const btnOperations3 = document.querySelector("#btn-operations--3");
const btnOp = document.querySelectorAll(".btn-op");
const opTitle = document.querySelector("#opTitle");
const opDescription = document.querySelector("#opDescription");
const opSvg = document.querySelector("#opSvg");


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

// scroll in link
function scrolling(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href);
    offsetTop.scrollIntoView({behavior: "smooth"});
  }

/* end arrow fuction */

const operations = (e) => {
    if (e.target.id === btnOperations1.id) {
        if (!btnOperations1.classList.contains("btn-operations-active")) {
            
            btnOperations2.classList.remove("btn-operations-active--green");
            btnOperations3.classList.remove("btn-operations-active--red");
            btnOperations1.classList.add("btn-operations-active");
            opTitle.classList.add('opacity0');
            opDescription.classList.add('opacity0');
            setTimeout( () => {
                opTitle.textContent = "Tranfser money to anyone, instantly! No fees, no BS.";
                opDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                opTitle.classList.remove('opacity0');
                opDescription.classList.remove('opacity0');
            }, 300)

        }
    }
    
    if (e.target.id === btnOperations2.id) {
        
        if (!btnOperations2.classList.contains("btn-operations-active--green")) {
            
            btnOperations1.classList.remove("btn-operations-active");
            btnOperations3.classList.remove("btn-operations-active--red");
            btnOperations2.classList.add("btn-operations-active--green");
            opTitle.classList.add('opacity0');
            opDescription.classList.add('opacity0');
            setTimeout( () => {
                opTitle.textContent = "Buy a home or make your dreams come true, with instant loans.";
                opDescription.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                opTitle.classList.remove('opacity0');
                opDescription.classList.remove('opacity0');
            }, 300)
        }
        
    }

    if (e.target.id === btnOperations3.id) {
        if (!btnOperations3.classList.contains("btn-operations-active--red")) {
            
            btnOperations2.classList.remove("btn-operations-active--green");
            btnOperations1.classList.remove("btn-operations-active");
            btnOperations3.classList.add("btn-operations-active--red");
            opTitle.classList.add('opacity0');
            opDescription.classList.add('opacity0');
            setTimeout( () => {
                opTitle.textContent = "No longer need your account? No problem! Close it instantly.";
                opDescription.textContent = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                opTitle.classList.remove('opacity0');
                opDescription.classList.remove('opacity0');
            }, 300)
        }
    }
}


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
    link.addEventListener("click", scrolling);
})

// btn-operation
btnOp.forEach( (btnOP) =>{
    btnOP.addEventListener("click", operations);
})



/* end add event listener  */


