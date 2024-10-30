// navigation bar
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggleMobile = document.getElementById("dropdownToggleMobile");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle dropdown in mobile view
  dropdownToggleMobile.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth < 992) {
      dropdownMenu.classList.toggle("show");
    }
  });
});


// form-validation
document
  .querySelectorAll(".input-group input, .input-group textarea")
  .forEach((input) => {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    input.addEventListener("input", handleInput);
  });

function handleFocus(event) {
  const label = event.target.closest(".input-group").querySelector("label");
  if (label) {
    label.classList.add("focused");
  }
}

function handleBlur(event) {
  const label = event.target.closest(".input-group").querySelector("label");
  if (label && event.target.value === "") {
    label.classList.remove("focused");
  }
  validateInput(event.target);
}

function handleInput(event) {
  validateInput(event.target);
}

function validateInput(input) {
  if (input.checkValidity()) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission by default

    const fileInput = document.getElementById("file").files[0]; // Get file object
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    const formIsValid = [
      ...document.querySelectorAll(".input-group input, .input-group textarea"),
    ].every((input) => {
      return input.checkValidity();
    });

    const notification = document.createElement("div");
    notification.className = "notification";

    // Check if all fields are valid
    if (!formIsValid) {
      notification.classList.add("error");
      notification.innerText =
        "Please fill out all fields correctly before submitting the form.";
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 5000);
      return; // Stop the form submission if fields are invalid
    }

    // Check if file exists and has a valid type
    if (!fileInput || !allowedTypes.includes(fileInput.type)) {
      notification.classList.add("error");
      notification.innerText =
        "Please upload a valid file. Only .jpg and .png file types are allowed.";
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 5000);
      return; // Stop the form submission if file type is invalid
    }

    // If everything is valid, show success message
    notification.classList.add("success");
    notification.innerText = `Thank you for contacting us! We will get back to you soon.`;
    // document.body.appendChild(notification);

    // Reset form and label focus states after successful submission
    // document.getElementById("contactForm").reset();
    document
      .querySelectorAll(".input-group label")
      // .forEach((label) => label.classList.remove("focused"));

    setTimeout(() => {
      notification.remove();
    }, 5000);
  });


// scroll indicator
// JavaScript to handle scroll events and activate the corresponding radio button
const sections = document.querySelectorAll("section");
const radios = document.querySelectorAll(
  '.scroll-indicator input[type="radio"]'
);

window.addEventListener("scroll", () => {
  let current = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 15) {
      current = index;
    }
  });

  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});
