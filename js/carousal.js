const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 1;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "left", "right");

    if (index === currentSlide) {
      slide.classList.add("active"); // Center the active slide
    } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
      slide.classList.add("left"); // Slide to the left
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.classList.add("right"); // Slide to the right
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove("bg-transparent");
      dot.classList.add("bg-primary");
    } else {
      dot.classList.add("bg--transparent");
      dot.classList.remove("bg-primary");
    }
  });
}

// Initial update
updateCarousel();

// Handle dot clicks
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
});

// Handle slide clicks
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
});
