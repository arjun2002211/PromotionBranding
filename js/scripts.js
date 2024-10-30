// navigation menu
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


// video interation
const video = document.getElementById("myVideo");
let muted = true;
window.addEventListener("scroll", () => {
  video.muted = true;
  muted = true;
});

video.addEventListener("click", () => {
  const video = document.getElementById("myVideo");
  console.log('clicked');
  
  if (muted == true) {
    video.muted = false;
    // video.play();
    muted = false;
  } else if (muted == false) {
    video.muted = true;
    muted = true;
  }
});

// #popup form
const loginPopup = document.querySelector(".login-popup");
const popupClose = document.querySelector("#popup-close");
const form = document.querySelector("#popup-form");
window.addEventListener("load", function () {
  showPopup();
});

function showPopup() {
  const timeLimit = 30; // seconds;
  let i = 1;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
  }, 1000);
}
popupClose.addEventListener("click", function () {
  loginPopup.classList.remove("show");
});

form.addEventListener("submit", (event) => {
  console.log("pressed");
  let name = document.querySelector("#name");
  let number = document.querySelector("#phone");
  let errorMsg = document.querySelector("#error-message");
  console.log(name, number);
  if (!(name.value == "" && number.value == "")) {
    if (number.value.length == 10) {
      console.log("Form submitted");
      loginPopup.classList.remove("show");
    } else {
      event.preventDefault();
      errorMsg.innerText = "Input correct number";
    }
  } else {
    event.preventDefault();
    errorMsg.innerText = "Form can not submit";
  }
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

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = index;
    }
  });
  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});

// dial button redirection
const dialButton = document.getElementById("dial-button");
dialButton.addEventListener("click", () => {
  const phoneNumber = "011 42603232";
  const url = `tel:${phoneNumber}`;
  window.location.href = url;
});
