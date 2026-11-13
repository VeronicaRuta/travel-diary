let current = 0;

const photo = document.getElementById("carousel-img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage() {
    photo.src = images[current];
}

nextButton.addEventListener("click", function () {
    current = (current + 1) % images.length;
    showImage();
});

prevButton.addEventListener("click", function () {
    current = (current - 1 + images.length) % images.length;
    showImage();
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.getElementById("lightbox-close");

photo.addEventListener("click", function () {
    lightboxImg.src = photo.src;
    lightbox.classList.add("open");
});

function closeLightbox() {
    lightbox.classList.remove("open");
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});