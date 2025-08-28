
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

// Simple fake search
const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
searchBtn?.addEventListener('click', () => {
  if (searchInput && searchInput.value.trim()) {
    alert('Searching for: ' + searchInput.value.trim());
  }
});


const slides = document.getElementById("slides");
const carousel = document.getElementById("carousel");
const cards = slides.children;
const cardWidth = 310; // width + margin
let currentIndex = 1;

// Clone first and last card for circular effect
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slides.firstChild);

const totalCards = slides.children.length;
slides.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

function moveSlide(step) {
  if (slides.classList.contains("shifting")) return;
  slides.classList.add("shifting");

  currentIndex += step;
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

  slides.addEventListener("transitionend", () => {
    if (currentIndex === 0) {
      slides.style.transition = "none";
      currentIndex = totalCards - 2;
      slides.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
    if (currentIndex === totalCards - 1) {
      slides.style.transition = "none";
      currentIndex = 1;
      slides.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
    slides.classList.remove("shifting");
  }, { once: true });
}

// Auto-rotate every 3 seconds
let autoSlide = setInterval(() => moveSlide(1), 3000);

// Pause on hover
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => moveSlide(1), 3000);
});