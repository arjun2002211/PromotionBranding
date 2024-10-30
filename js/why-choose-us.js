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

    if (window.pageYOffset >= sectionTop - sectionHeight / 10) {
      current = index;
    }
  });

  radios.forEach((radio, index) => {
    radio.checked = index === current;
  });
});

const dialButton = document.getElementById('dial-button');
const number =  document.getElementById('number');

// console.log('number :', number);

let arr = [dialButton, number];

arr.forEach(element => {
  element.addEventListener('click', () => {
    const phoneNumber = '011 42603232';
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  });
});


// portfolio-section

const portfolio = document.querySelector('.portfolio-gallery'),
      portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
      portfolioCats = document.querySelectorAll('.portfolio-cats > li');
let parentWidth = portfolio.offsetWidth,
    windowWidth = window.innerWidth;

portfolioCats.forEach(cat => {
    cat.addEventListener('pointerdown', function() {
        const dataFilter = this.dataset.filter;
        const el = [];

        if (dataFilter === '*') {
            positionItems(portfolioItems);
        } else {
            portfolioItems.forEach(item => {
                if (item.dataset.filter == dataFilter) {
                    el.push(item);
                } else {
                    item.style.cssText = 'transform: scale(0.1); opacity: 0;';
                }
            });
            positionItems(el);
        }
    });
});
// Count Number of Items Per Row
function countRowsItems() {
    let rowItems = 0;
    if (windowWidth <= 768) {
        rowItems = 1;
    } else if (windowWidth <= 992) {
        rowItems = 2;
    } else {
        rowItems = 3;
    }
    return rowItems;
}
// Position each item in its place
function positionItems(items) {
    let rowItems = countRowsItems();
    let y = 0;
    let x = 0;
    let itemCount = 0;
    items.forEach((item, i) => {
        item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
        x++;
        if (x%rowItems == 0) {
            y++;
            x = 0;
        }
        itemCount = i;
    });
    portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}

positionItems(portfolioItems);

window.addEventListener('resize', () => {
    parentWidth = portfolio.offsetWidth;
    windowWidth = window.innerWidth;
    positionItems(portfolioItems);
});
