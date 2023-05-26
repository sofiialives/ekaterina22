// Get the overlay element and the picture element
const overlay = document.getElementById('overlay');
const picture = document.getElementById('picture');

// Add a click event listener to the picture
picture.addEventListener('click', toggleOverlay);

// Function to toggle the overlay visibility
function toggleOverlay() {
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
}