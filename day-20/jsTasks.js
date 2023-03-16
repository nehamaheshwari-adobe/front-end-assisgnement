const SAMPLE_URL = " http://www.example.com?foo=BaR&abc=1";

const $ = document;

const USERNAME = $.getElementById("username");
const EMAIL = $.getElementById("email");
const FORM_BUTTON = $.getElementById("formSubmitButton");
const LOGIN_FORM = $.getElementById("loginForm");
const ERROR_MESSAGE_CONTAINER = $.getElementById("errorMessage");





let urlQueryParams = SAMPLE_URL.substring(SAMPLE_URL.indexOf('?')+1);
if(urlQueryParams.includes('&')) {
    let queryParamArray = urlQueryParams.split('&');
    for(let queryParam of queryParamArray) {
        console.log("queryParam : "+queryParam);
    }
} else {
    console.log(SAMPLE_URL.substring(SAMPLE_URL.indexOf('?')+1));
}

let typeOfSite;
if(SAMPLE_URL.trim().startsWith('http')){
    typeOfSite = 'external website';
}

if(SAMPLE_URL.includes('gov.in')) {
    typeOfSite = typeOfSite + ', government website';
}

if(SAMPLE_URL.includes('.php')) {
    typeOfSite = typeOfSite + ', internal website';
}

console.log("task 2 : type is - "+typeOfSite);

const getFormLoginValues = () => {
    let username = USERNAME.value.trim();
    let email = EMAIL.value.trim();
    if(username.length <= 20 && email.includes('@')) {
        displayThankYouMessage(username);
    } else {
        if(username.length > 20 && !email.includes('@')) {
            displayErrorMessage("username must be less than 20 characters & email must have @ character");
        } else if(username.length > 20) {
            displayErrorMessage("username must be less than 20 characters");
        } else {
            displayErrorMessage("email must have @ character");
        }       
    }
    
}

const displayThankYouMessage = (username) => {
    LOGIN_FORM.innerHTML = `Welcome ${username}`;
    ERROR_MESSAGE_CONTAINER.innerHTML ='';
}

const displayErrorMessage = (errorMessage) => {
    ERROR_MESSAGE_CONTAINER.innerHTML = `${errorMessage}`;
}

const submitForm = (e) => {
    e.preventDefault();
    getFormLoginValues();
}

FORM_BUTTON.addEventListener("click", submitForm);


/*switch() {
    case 'http' :
        typeOfSite = 'external website';
        break;

    case 'gov.in' :
        typeOfSite = 'government website';
        break;

    case '.php' :
        typeOfSite = 'internal website';
        break;

    default :
        typeOfSite = 'external website';
}*/

/*const fetchQueryParams = () => {
    
    SAMPLE_URL.substring(SAMPLE_URL.indexOf('?')+1);
}*/

