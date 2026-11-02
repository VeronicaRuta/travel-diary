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