let form = document.querySelector("#formId");
let processed = document.querySelector("#btn_proceed");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  removeErrorMessages();
  if (
    validateFirstName() &&
    validateMiddleName() &&
    validateLastName() &&
    validateBloodType() &&
    validateGender()
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

// Validate First Name
function validateFirstName() {
  var first_name = document.getElementById("f-name").value;
  if (!first_name || first_name.length < 2) {
    showError("f-name", "Please enter your FirstName");
    return false;
  }
  return true;
}
// Validate Middle Name
function validateMiddleName() {
  var middle_name = document.getElementById("m-name").value;
  if (!middle_name || middle_name.length < 2) {
    showError("m-name", "Please enter your Middle Name");
    return false;
  }
  return true;
}

// Validate Last Name
function validateLastName() {
  var last_name = document.getElementById("l-name").value;
  if (!last_name || last_name.length < 2) {
    showError("l-name", "Please enter your LastName");
    return false;
  }
  return true;
}

// Validate Blood type
function validateBloodType() {
  var blood_type = document.getElementById("blood-type");
  if (!blood_type.value) {
    showError("blood-type", "Please Select your blood type");
    return false;
  }
  return true;
}

// Validate Gender
function validateGender() {
  var Gender = document.getElementById("Gender");
  if (!Gender.value) {
    showError("Gender", "Please Select your Gender");
    return false;
  }
  return true;
}
