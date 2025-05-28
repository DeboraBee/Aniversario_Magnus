// Carrossel de fotos
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;

function showImage(index) {
  const size = images[0].clientWidth;
  carouselImages.style.transform = `translateX(${-size * index}px)`;
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % images.length;
  showImage(counter);
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + images.length) % images.length;
  showImage(counter);
});

// Texto aparecendo com scroll
const texts = document.querySelectorAll('.text');

function revealTextOnScroll() {
  const trigger = window.innerHeight * 0.8;
  texts.forEach(text => {
    const top = text.getBoundingClientRect().top;
    if (top < trigger) {
      text.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealTextOnScroll);
window.addEventListener('load', revealTextOnScroll);
