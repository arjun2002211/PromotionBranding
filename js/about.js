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

// parallax effect
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.hero');
  const parallax2 = document.querySelector('.hero2');
  const leftImage = document.querySelector('.left-image');
  const rightImage = document.querySelector('.right-image');
  let scrollPosition = window.pageYOffset;

  // Move the main background upwards with the parallax effect
  parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
  parallax2.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';

  // Move the left small image upwards with the same speed
  leftImage.style.transform = `translateY(${-(scrollPosition * 0.3)}px) rotate(-30deg)`;

  // Move the right small image upwards with the same speed
  rightImage.style.transform = `translateY(${-(scrollPosition * 0.3)}px) rotate(30deg)`;

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

// counter
var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
});

// dial button redirection
const dialButton = document.getElementById('dial-button');

dialButton.addEventListener('click', () => {
  const phoneNumber = '011 42603232';
  const url = `tel:${phoneNumber}`;
  window.location.href = url;
});