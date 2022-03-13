let btnSubmit = document.querySelector("#btn_proceed");
let form = document.querySelector("#formId");
let processed = document.querySelector("#btn_proceed");
// form.addEventListener('submit', validateForm);

function validateForm(event) {
  removeErrorMessages();
  if (
    validateSelectCity() &&
    validateSelectRegion() &&
    validateSelectDate() &&
    validateEmail() &&
    validateCheckbox() &&
    validatePhone()
  ) {
    // processed.removeAttribute("disabled");
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

function showError(element_id, message) {
  var element = document.getElementById(element_id);
  var error_div = document.createElement("div");
  error_div.id = element_id + "_error";
  error_div.className = "error";
  error_div.innerHTML = message;
  element.parentNode.insertBefore(error_div, element.nextSibling);
  error_div.style.color = "red";
  error_div.style.padding = "10px";
}
function removeElementsByClass(rootElement, className) {
  var elements = rootElement.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function removeErrorMessages() {
  removeElementsByClass(document.getElementById("formId"), "error");
}
// validate select city
function validateSelectCity() {
  var city = document.getElementById("city");
  if (city.value == "") {
    showError("city", "Please Select City");
    return false;
  }
  return true;
}

// validate select Region
function validateSelectRegion() {
  var Region = document.getElementById("Region");
  if (Region.value == "") {
    showError("Region", "Please Select Region");
    return false;
  }
  return true;
}

// validate select Language of communication
function validateSelectLanguage() {
  var Language = document.getElementById("Language");
  if (Language.value == "") {
    showError("Language", "Please Select Language");
    return false;
  }
  return true;
}

// validate Date of birth
function validateSelectDate() {
  var Date = document.getElementById("Date");
  if (Date.value == "") {
    showError("Date", "Please Fill Date");
    return false;
  }
  return true;
}

// validate Email
function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.getElementById("email");
  if (!email.value.match(mailformat)) {
    showError("email", "Please Enter Valid Email");
    return false;
  }
  return true;
}

// validate checkbox
function validateCheckbox() {
  var checkboxx = document.getElementById("checkboxx");
  if (checkboxx.checked == false) {
    showError("check", "Please agree to Terms & conditions");
    return false;
  }
  return true;
}

// validate Phone Number
function validatePhone() {
  var phoneno = /^01[0-2,5]{1}[0-9]{8}$/;
  var phone_num = document.getElementById("phone_num");
  if (!phone_num.value.match(phoneno)) {
    showError("send", "Please Enter Valid Phone Number");
    return false;
  }
  return true;
}

