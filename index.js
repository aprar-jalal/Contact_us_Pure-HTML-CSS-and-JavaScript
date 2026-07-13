//--------------Constants---------------
const links = document.querySelectorAll(".subHeader a");
const form = document.getElementById("contactForm");
const error = document.querySelectorAll(".error");
const inputs = form.querySelectorAll("input");

//--------------sidebar functions---------------

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
function openMenu() {
  document.getElementById("sidebar").classList.add("active");
}
function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

//--------------validation functions---------------

//validation for each input
function validateField(input) {
  const ErrorName = document.getElementById(input.name + "Error");
  if (!ErrorName) return true;

  const value = input.value.trim();

  if (value === "") {
    ErrorName.textContent = "This field is required";
    input.classList.add("error-input");
    return false;
  }

  if (input.name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      ErrorName.textContent =
      "Please enter valid email format";
      input.classList.add("error-input");
      return false;
    }
  }
  ErrorName.textContent = "";
  input.classList.remove("error-input");

  return true;
}

//on clicking the submit button and showing a toast message 
form.addEventListener("submit", function (e) {
  e.preventDefault();
  error.forEach((err) => (err.textContent = ""));

  let isValid = true;
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
   if (!isValid) {
      return;
    }
  const formData = new FormData(form);

  let message = "";

  for (const [key, value] of formData.entries()) {
    message += `${key}: ${value}\n`;
  }

  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "right",
    style: {
      background: "#a5a5a5",
    },
  }).showToast();
  form.reset();
});

//when writing on the input field error is gone
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    validateField(input);
  });
});
