// modern-normalize
import "../style/modern-normalize.css";

// style
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/hero.css";
import "../style/components/about.css";
import "../style/components/career.css";
import "../style/components/community.css";
import "../style/components/footer.css";

// utility
import "../style/utility.css";



// ### scroll behavior
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
  
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });

// slider
let currentSlideIndex = 0;

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideElements = document.querySelectorAll('.slide');

function showSlide(index) {
    const slidesCount = slideElements.length;
    if (index >= slidesCount) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slidesCount - 1;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(currentSlideIndex);
