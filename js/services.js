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


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var circles = document.querySelectorAll("#gits circle"),
  progress = document.getElementsByTagName("text")[0];

for (var j = 0; j < circles.length; ++j) {
  var radius = parseInt(circles[j].getAttribute('r'), 10);
  circles[j].circumference = 2 * radius * Math.PI;
  circles[j].init = getRandomInRange(20, 80);
  circles[j].style.strokeDasharray = circles[j].init + " " + circles[j].circumference;
}

var i = 0;
var timer = setInterval(function () {
  if (i == 100) {
    clearInterval(timer);
  } else {
    for (var j = 0; j < circles.length; ++j) {
      circles[j].style.strokeDasharray = circles[j].init + i + " " + circles[j].circumference;
    }
  }
}, 500)


// scroll indicator
// JavaScript to handle scroll events and activate the corresponding radio button
const sections = document.querySelectorAll('section');
const radios = document.querySelectorAll('.scroll-indicator input[type="radio"]');

window.addEventListener('scroll', () => {
  let current = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 30) {
      current = index;
    }
  });

  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});

// dial button redirection
const dialButton = document.getElementById('dial-button');

dialButton.addEventListener('click', () => {
  const phoneNumber = '011 42603232';
  const url = `tel:${phoneNumber}`;
  window.location.href = url;
});

