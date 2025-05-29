///Slider
const slide = document.getElementById("carouselSlide");
const images = slide.querySelectorAll("img");
let index = 0;

function updateCarousel() {
  slide.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}
/////number card

const grid = document.getElementById('numberGrid');

    for (let i = 0; i < 100; i++) {
      const numStr = i.toString().padStart(2, '0');
      const div = document.createElement('div');
      div.className = 'number';
      div.textContent = numStr;
      div.addEventListener('click', () => {
        alert(`You clicked: ${numStr}`);
      });
      grid.appendChild(div);
    }
