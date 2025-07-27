// স্লাইডশো
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 3000);

// ঘড়ি আপডেট
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// আজকের তারিখ দেখানো (বাংলায়)
function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // বাংলা লোকেল দিয়ে তারিখ ফরম্যাট
  const banglaDate = now.toLocaleDateString('bn-BD', options);
  document.getElementById("currentDate").textContent = banglaDate;
}

setInterval(updateClock, 1000);
updateClock();
updateDate();

// Contact Form Submit (ডেমো)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "✅ মেসেজ সফলভাবে পাঠানো হয়েছে (ডেমো)!";
  this.reset();
  setTimeout(() => {
    status.textContent = "";
  }, 3000);
});

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
const testimonialPrevBtn = document.querySelector('.testimonial-btn.prev');
const testimonialNextBtn = document.querySelector('.testimonial-btn.next');
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testi, i) => {
    testi.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
}

testimonialNextBtn.addEventListener('click', nextTestimonial);
testimonialPrevBtn.addEventListener('click', prevTestimonial);

setInterval(nextTestimonial,3000); // ৫ সেকেন্ডে বদলাবে