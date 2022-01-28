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
const navLinks = document.querySelectorAll(".nav__right-bar-ul-a")
const logo = document.querySelector(".nav__logo")
const secction1 = document.querySelector("#section--1")
const secction2 = document.querySelector("#section--2")
const secction3 = document.querySelector("#section--3")
const allsection = document.querySelectorAll(".sections")
const uploaImg = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
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

const efectActiveNav = (e) => {
    if (e.target.classList.contains("nav__right-bar-ul-a")) {
        const link = e.target;
        navLinks.forEach((navLinks => {
            if (navLinks !== link) {
                navLinks.style.opacity = 0.5;
            }
        }))
        
        account.forEach((el => {
            el.style.opacity = 0.5;
        }))

        logo.style.opacity = 0.5;
    }
}

const efectDeactiveNav = (e) => {
    if (e.target.classList.contains("nav__right-bar-ul-a")) {
        const link = e.target;
        navLinks.forEach((navLinks => {
            if (navLinks !== link) {
                navLinks.style.opacity = 1;
            }
        }))
        
        account.forEach((el => {
            el.style.opacity = 1;
        }))

        logo.style.opacity = 1;
    }
}


const revealSection = function(entries, observer){
    const [entry] = entries;
    if (entry.isIntersecting) {
        setTimeout(() => {
            entry.target.classList.remove("sections--hiden");
        }, 300);
    }else{
        entry.target.classList.add("sections--hiden");
    }
}


const sectionObserver = new IntersectionObserver(
    revealSection, {
        root: null,
        threshold: 0.15
    });

revealImg = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {

        entry.target.src = entry.target.dataset.src;
        // when the img is load remove filter lazi-img
        entry.target.addEventListener("load", function (){
            entry.target.classList.remove("lazy-img");
        })

    }
}

const imgObserver = new IntersectionObserver(
    revealImg, {
        root: null,
        threshold: 0
    });

let cursorStatus = 0
const next = () => {
    if (cursorStatus === maxSlides) {
        cursorStatus = 0;
    }else{
        cursorStatus++;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - cursorStatus)}%)`);
}

const previous = () => {
    if (cursorStatus == 0) {
        cursorStatus = maxSlides;
    }else{
        cursorStatus--;
    }
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - cursorStatus)}%)`);
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
    link.addEventListener("click", scrolling);
})

// btn-operation
btnOp.forEach( (btnOP) =>{
    btnOP.addEventListener("click", operations);
})

// opacity when mouseover in nav links
navLinks.forEach((navLinks => {
    navLinks.addEventListener('mouseover', efectActiveNav);
}))

// opacity when mouseout in nav links
navLinks.forEach((navLinks => {
    navLinks.addEventListener('mouseout', efectDeactiveNav);
}))

allsection.forEach(function (section) {
    sectionObserver.observe(section)
    section.classList.add("sections--hiden");
});

uploaImg.forEach( (uploaImg => {
    imgObserver.observe(uploaImg);
}));

btnRight.addEventListener("click", next);
btnLeft.addEventListener("click", previous);

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
const maxSlides = slides.length - 1;














/* end add event listener  */


