//scroll
const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll',trackScroll);
function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0,-75);
    setTimeout(goTop,0);
  }
}

//burger-menu

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  renderPopup();
}


const menuB = document.querySelector('#menu-b').cloneNode(1);


function renderPopup() {
  popup.appendChild(menuB);  
}