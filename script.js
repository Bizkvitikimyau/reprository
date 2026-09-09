let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) { currentSlide = 0; }
    else if (index < 0) { currentSlide = slides.length - 1; }
    else { currentSlide = index; }
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}
function moveSlide(step) {
    showSlide(currentSlide + step);
}