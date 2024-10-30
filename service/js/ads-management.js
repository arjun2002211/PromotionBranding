// navigation-bar
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.getElementById('dropdownToggleMobile');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Toggle the dropdown when the icon is clicked
  dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior
    dropdownMenu.classList.toggle('show'); // Toggle 'show' class
  });
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

    if (window.pageYOffset >= sectionTop - sectionHeight / 10) {
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