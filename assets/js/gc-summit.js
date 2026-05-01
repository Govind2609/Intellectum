// GC Summit Landing Page JavaScript

// ── HERO SLIDER ──
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Auto-change slides every 5 seconds
setInterval(nextSlide, 5000);

// ── COUNTDOWN TIMER ──
function updateCountdown() {
  const targetDate = new Date('May 20, 2026 10:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ── WHAT AWAITS YOU CAROUSEL ──
const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

carouselPrev.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: -400, behavior: 'smooth' });
});

carouselNext.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: 400, behavior: 'smooth' });
});

// ── SPEAKERS CAROUSEL ──
const speakersTrack = document.querySelector('.speakers-track');
const speakersPrev = document.getElementById('speakersPrev');
const speakersNext = document.getElementById('speakersNext');

speakersPrev.addEventListener('click', () => {
  speakersTrack.scrollBy({ left: -320, behavior: 'smooth' });
});

speakersNext.addEventListener('click', () => {
  speakersTrack.scrollBy({ left: 320, behavior: 'smooth' });
});

// ── SMOOTH SCROLL FOR ANCHOR LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
