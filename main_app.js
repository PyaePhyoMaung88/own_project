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

// Optional: Auto-slide every 5 seconds
// setInterval(nextSlide, 5000);
