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
  e.target.classList.toggle("active");
  MOBILE_NAV_COLLECTION[0].classList.toggle("active");
}
BUTTON.addEventListener("click", buttonPressed);

const USERNAME_LENGTH = 27;
const EMAILFORMAT = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const EMAIL_FIELD_ID = "email";
const NAME_FIELD_ID = "name";
const CONTACTUS_FORM_ELEMENT_ID = "contactUsForm";
const CONTACTUS_SUBMIT_FIELD_ID = "contact-us-submit";
const CONTACTUS_SECTION = "contact-us-main";


const collectFormData = () => {
    let signUpFormObj = {};
    const FORM = $.getElementById(CONTACTUS_FORM_ELEMENT_ID);
    const FORM_ELEMENTS = Array.from(FORM.elements);

    FORM_ELEMENTS.forEach(element => {
        signUpFormObj[element.name] = element.value;

    });
    console.log(signUpFormObj);
}


const validateEmail = () => {
    const EMAILFIELD = document.getElementById(EMAIL_FIELD_ID);
    // return (EMAILFIELD.value.trim().match(EMAILFORMAT)) ? `valid email` : `invalid email`;

    if (EMAILFIELD.value.trim().match(EMAILFORMAT)) {
        EMAILFIELD.classList.remove('error');
        return true;
    }
    EMAILFIELD.classList.add('error');
    return false;

}

const validateName = () => {
    const NAMEFIELD = document.getElementById(NAME_FIELD_ID);

    if (NAMEFIELD.value.trim() !== '' && NAMEFIELD.value.trim().length > 2) {
        NAMEFIELD.classList.remove('error');
        return true;
    }
    NAMEFIELD.classList.add('error');
    return false;
}

const invokeSubmitClick = (event) => {
    event.preventDefault();
    collectFormData();
    document.getElementsByClassName(CONTACTUS_SECTION)
    const emailValidFlag = validateEmail();
    const nameValidFlag = validateName();
    if (emailValidFlag && nameValidFlag) {
        document.getElementById("success-message").style.display = `flex`;
        document.getElementsByClassName(CONTACTUS_SECTION)[0].style.display = `none`;
    } else {
        document.getElementById("success-message").style.display = `none`;
        document.getElementsByClassName(CONTACTUS_SECTION)[0].style.display = `block`;
    }
}



const formSubmitButton = document.getElementById(CONTACTUS_SUBMIT_FIELD_ID);
formSubmitButton.addEventListener("click", invokeSubmitClick);

const MENU_TOGGLE_BUTTON = document.getElementById("menu-toggle"); 
const menuButtonPressed = (e) => {
  MENU_TOGGLE_BUTTON.classList.toggle("active");
  MOBILE_NAV_COLLECTION[0].classList.toggle("active");
}
BUTTON.addEventListener("click", menuButtonPressed);
