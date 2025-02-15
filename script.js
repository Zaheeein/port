// Add interactivity or animations here if needed
document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a smooth scroll effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".gallery-slide img");
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Move images horizontally
    document.querySelector(".gallery-slide").style.transform = `translateX(${offset}%)`;
}

document.querySelector(".gallery-prev").addEventListener("click", () => showSlide(currentIndex - 1));
document.querySelector(".gallery-next").addEventListener("click", () => showSlide(currentIndex + 1));
