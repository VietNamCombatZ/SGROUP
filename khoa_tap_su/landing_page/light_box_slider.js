let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const counter = document.getElementById("counter");

function openLightbox(index) {
  currentSlide = index;
  showSlide(currentSlide);
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  updateCounter();
}

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  showSlide(currentSlide);
}

function updateCounter() {
  counter.textContent = `${currentSlide + 1} of ${totalSlides}`;
}

document.getElementById("close").addEventListener("click", closeLightbox);
