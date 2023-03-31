require('../scss/main.scss')

$ = document;

const NAVBAR = $.querySelector('.site-nav');
const NAVBAR_MOBILE = $.querySelector('.site-nav-mobile');
window.onscroll = () => {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    NAVBAR.classList.add('scrolled');
    NAVBAR_MOBILE.classList.add('scrolled');
  } else {
    NAVBAR.classList.remove('scrolled');
    NAVBAR_MOBILE.classList.remove('scrolled');
  }
}


const MOBILE_NAV_COLLECTION = document.getElementsByClassName("nav-grid");
const BUTTON = document.getElementById("menu-toggle"); 
const buttonPressed = (e) => {
  BUTTON.classList.toggle("active");
  MOBILE_NAV_COLLECTION[0].classList.toggle("active");
}
BUTTON.addEventListener("click", buttonPressed);
