const slider = document.querySelector('.slider');
let index = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function moveSlider() {
  index++;
  if (index === totalImages) {
    index = 0;
  }
  slider.style.transform = `translateX(${-index * images[0].clientWidth}px)`;
}

setInterval(moveSlider, 3000); // Change slide every 3 seconds
