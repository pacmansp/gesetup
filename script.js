// Get the lightbox element
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery img');

// Add click event to each image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = image.getAttribute('data-full'); // Set the full image source
        history.pushState(null, '', `#${image.alt}`); // Update the URL
    });
});

// Close the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        window.history.back(); // Go back to the previous page
    }
});

// Handle back/forward browser navigation
window.addEventListener('popstate', () => {
    lightbox.style.display = 'none'; // Hide the lightbox on back/forward navigation
});