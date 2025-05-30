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

// 2-digit numbers: 00 to 99
const grid2d = document.getElementById('numberGrid-2d');
for (let i = 0; i < 100; i++) {
  const numStr = i.toString().padStart(2, '0');
  const div = document.createElement('div');
  div.className = 'number';
  div.textContent = numStr;

  div.addEventListener('click', () => {
    alert(`You clicked: ${numStr}`);
  });

  grid2d.appendChild(div);
}

// 3-digit numbers: 000 to 999
const grid3d = document.getElementById('numberGrid-3d');
for (let i = 0; i < 1000; i++) {
  const numStr = i.toString().padStart(3, '0');
  const div = document.createElement('div');
  div.className = 'number';
  div.textContent = numStr;

  div.addEventListener('click', () => {
    alert(`You clicked: ${numStr}`);
  });

  grid3d.appendChild(div);
}


