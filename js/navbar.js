let lastScrollPosition = 0; // To track the previous scroll position
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY; // Use scrollY instead of pageYOffset

  // Check if scrolling down
  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down - hide the navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - show the navbar
    navbar.style.transform = "translateY(0)";
  }

  if (currentScrollPosition !== 0) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }

  // Update the lastScrollPosition with the new position
  lastScrollPosition = currentScrollPosition;
});
