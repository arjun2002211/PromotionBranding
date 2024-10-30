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

// #counter
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
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
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
