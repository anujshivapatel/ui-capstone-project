let $ = document;
const USERNAME_LENGTH = 27;
const EMAILFORMAT = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const EMAIL_FIELD_ID= "email";
const NAME_FIELD_ID= "name";
const NEWSLETTER_FORM_ELEMENT_ID= "newsletterForm";
const NEWSLETTER_SUBMIT_FIELD_ID= "newsletter-submit";


const collectFormData = () => {
    let signUpFormObj = {};
    const FORM = $.getElementById(NEWSLETTER_FORM_ELEMENT_ID);
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
    
    return true;
   }
   EMAILFIELD.classList.add('error');
   return false;
   
}


const invokeSubmitClick = (event) => {
    event.preventDefault();
    collectFormData();
    if(validateEmail()) {
        document.getElementById("success-message").innerHTML=`Form Successfully Submitted`;
    } else {
        document.getElementById("success-message").innerHTML=`Error while submitting the form.`;

    }
}



const formSubmitButton = document.getElementById(NEWSLETTER_SUBMIT_FIELD_ID);
formSubmitButton.addEventListener("click", invokeSubmitClick);