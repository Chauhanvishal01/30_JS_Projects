const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById("submit-error");

const contactName = document.getElementById("contact-name");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const contactMsg = document.getElementById("contact-msg");
const btn = document.getElementById("btn");

contactName.addEventListener("keyup", () => {
  var name = contactName.value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
});

contactPhone.addEventListener("keyup", () => {
  var phone = contactPhone.value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only Digits please";
    return false;
  }
  phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
});

contactEmail.addEventListener("keyup", () => {
  var email = contactEmail.value;

  if (email.length == 0) {
    emailError.innerHTML = "Emnail is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
});

contactMsg.addEventListener("keyup", () => {
  var message = contactMsg.value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    msgError.innerHTML = left + "more character required";
    return false;
  }

  msgError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
});

btn.addEventListener("click", () => {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
});
