// CODE DISCLAIMER: I WROTE MY OWN CODE WHILE USING THE TEMPLATE PROVIDED
// PROJECT 5 CODE


let form = null;
let sucMsg = null;

let phoneRegex = /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipcodeRegex =  /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/;

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];


// Creates event listeners for the input elements and submit button
function initValidation(formId, successId) {
    form = document.getElementById(formId);
    sucMsg = document.getElementById(successId);

    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", inputChanged);
    }
    form.addEventListener("submit", submitForm);
}


// Function that determines if the input changed
function inputChanged(event) {
    let element = event.currentTarget;
    validateForm();

    element.classList.add("was-validated");
}

function submitForm(event) {
    let form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    validateForm();

    if (!form.checkValidity()) {
        // TODO: If form is invalid set 'was-validated' class on all 
        // inputs to show errors
        let inputs = form.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.add('was-validated');
        }
    }
    else {
        sucMsg.classList.remove("hidden");
        form.style.display = "none";

    }
}

// Calls 'checkRequired' for each field input to validate if the input
// is valid or invalid
function validateForm() {
    // Checks validity of first name, last name, address, and city
    checkRequired("firstName", "First Name is Required");
    checkRequired("lastName", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");

    // Checks validity of state
    if (checkRequired("state","State is Required")) {
        vaildateState("state", "Not a valid State, enter a two digit code e.g., UT");
    }

    // Checks validity of email
    if (checkRequired("email", "Email Address is Required")) {
        checkFormat("email", "Email Address format is invalid", emailRegex);
    }

    // Checks validity of zipcode
    if (checkRequired("zip", "Zip Code is Required")) {
        checkFormat("zip", `Malformed zip-code, please use either "#####", or "#####-#### format.`, zipcodeRegex);
    }

    // Checks validity of phone
    if (checkRequired("phone", "Phone Number is Required")) {
        checkFormat("phone", "Phone number format is invalid", phoneRegex);
    }

    // Check validity of checkbox
    checkRequired("social-media","you must select at least one!");
}

// Checks the validity of the state input field
function vaildateState(id, msg) {
    let element = document.getElementById(id);
    let valid = false;

    let uppercaseStr = element.value.toUpperCase();

    if (stateAbbreviations.includes(uppercaseStr)) {
        valid = true;
    }
    setElementValidity(id, valid, msg);
}

// Checks the validity of the email and zipcode fields
function checkFormat(id, msg, regex) {
    let valid = false;
    let element = document.getElementById(id);

    if (regex.exec(element.value)) {
        valid = true;
    }
    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, message) {
    let element = document.getElementById(id);
    let valid = false;
    let type = element.type;

    switch (type) {
        case "text":
            if (element.value.length > 0) {
                valid = true;
            }
            break;

        case "checkbox":
            let name = element.getAttribute("name");
            let checkBoxes = document.querySelectorAll(`input[name=${name}]:checked`);
            if (checkBoxes.length > 0) {
                valid = true;
            }
            break;
    }
    setElementValidity(id, valid, message);
    return valid;
}

// Sets the validity attribute in a input field
function setElementValidity(id, valid, msg) {
    let element = document.getElementById(id);
    let errorDiv = document.getElementById(`${id}-error`);

    if (valid) {
        element.setCustomValidity("");
        errorDiv.textContent = "";
    }
    else {
        element.setCustomValidity(msg);
        // TODO insert or remove message in error div for element
        errorDiv.textContent = msg;
    }
}