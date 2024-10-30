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


// form-js
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// scroll indicator
// JavaScript to handle scroll events and activate the corresponding radio button
const sections = document.querySelectorAll('section');
const radios = document.querySelectorAll('.scroll-indicator input[type="radio"]');

window.addEventListener('scroll', () => {
  let current = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = index;
    }
  });

  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});


// form-scripting
contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  let alert = document.getElementById('form-alert');

  if (name.value == "" && phone.value == "") {
    event.preventDefault();
    alert.innerText = "Name and Phone number is compulsory";
  }
  else {
    if (name.value == "") {
      event.preventDefault();
      alert.innerText = "Name is empty";
    }
    else {
      if (phone.value == "") {
        event.preventDefault();
        alert.innerText = "Phone number is empty"
      }
      else {
        if (phone.value.length !== 10) {
          event.preventDefault();
          alert.innerText = "Check the phone number";
        }
      }
    }
  }
})

// dial button redirection
const dialButton = document.getElementById('dial-button');

dialButton.addEventListener('click', () => {
  const phoneNumber = '011 42603232';
  const url = `tel:${phoneNumber}`;
  window.location.href = url;
});





