const toggleButton = document.getElementById('modeToggle');
const icon = document.getElementById('icon');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');

// Image sources for moon and sun icons
const moonIconSrc = "moon.png"; // Replace with actual path to moon image
const sunIconSrc = "sun.png";   // Replace with actual path to sun image

// Initial icon should be moon (for light mode)
icon.src = moonIconSrc;
icon.src = sunIconSrc;

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle between moon and sun images
  if (document.body.classList.contains('dark-mode')) {
    icon.src = moonIconSrc; // Show sun icon in dark mode
  } else {
    icon.src = sunIconSrc; // Show moon icon in light mode
  }
});

hamburger.addEventListener('click', () => {
  navLinks.querySelector('ul').classList.toggle('active');
  hamburger.classList.toggle('open');
})