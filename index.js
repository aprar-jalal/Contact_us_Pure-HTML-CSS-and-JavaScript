const links = document.querySelectorAll(".subHeader a");
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

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const Name = form.elements["Name"].value.trim();
  const Bussiness = form.elements["Bussiness"].value.trim();
  const Address = form.elements["Address"].value.trim();
  const Postcode = form.elements["Postcode"].value.trim();
  const Contact_name = form.elements["Contact_name"].value.trim();
  const Email = form.elements["gmail"].value.trim();
  const Phone = form.elements["Phone"].value.trim();
  const linkedin = form.elements["linkedin"].value.trim();
  const idea = form.elements["idea"].value.trim();

  if (Name == "") {
    document.getElementById("NameError").innerHTML =
      "Please, enter name of your company";
    isValid = false;
  }
  if (Bussiness == "") {
    document.getElementById("BussinessError").innerHTML =
      "Please, enter the Nature of Bussiness";
    isValid = false;
  }
  if (Address == "") {
    document.getElementById("AddressError").innerHTML =
      "Please, enter your Address";
    isValid = false;
  }
  if (Postcode == "") {
    document.getElementById("PostcodeError").innerHTML =
      "Please, enter the Postcode";
    isValid = false;
  }
  if (Contact_name == "") {
    document.getElementById("Contact_nameError").innerHTML =
      "Please, enter Contact Name";
    isValid = false;
  }
  if (Phone == "") {
    document.getElementById("PhoneError").innerHTML =
      "Please, enter Phone Number";
    isValid = false;
  }
  if (Email == "") {
    document.getElementById("emailError").innerHTML =
      "Please, enter valid email address";
    isValid = false;
  }
  if (linkedin == "") {
    document.getElementById("LinkedinError").innerHTML =
      "Please, enter Linkedin name";
    isValid = false;
  }
  if (idea == "") {
    document.getElementById("ideaError").innerHTML = "Please, enter your Idea";
    isValid = false;
  }
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
    }
}).showToast();
  form.reset();
});
