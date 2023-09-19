const images = [
    "images/background.jpg",
    "images/b.jpg",
    "images/bookmark.jpg",
    "images/calculator.jpg",
     "images/chatbot.jpg",
     "images/boom.jpg",
     
     "images/drumkit.jpg",
     "images/library.jpg",
     "images/lightbox.jpg",
     "images/movie.jpg",
     "images/movieTicket.jpg",
     "images/shopping.jpg"
     
    // Add more image URLs here
];

let currentImageIndex = 0;
const galleryImage = document.getElementById('galleryImage');

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

// Add left and right arrow key press events
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});

// Load the first image on page load
updateImage();
