let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const tabs = document.querySelectorAll('.tab');
let autoSlideInterval;

const honorSocietyVideo = document.getElementById('honor-society-video');

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showExtracurricular(slides[currentSlide].id);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function showExtracurricular(id) {
    slides.forEach((slide, index) => {
        if (slide.id === id) {
            slide.classList.add('active');
            currentSlide = index;
        } else {
            slide.classList.remove('active');
        }
    });
}

startAutoSlide();

if (honorSocietyVideo) {
    honorSocietyVideo.addEventListener('play', () => {
        stopAutoSlide();
    });

    honorSocietyVideo.addEventListener('ended', () => {
        startAutoSlide();
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        stopAutoSlide();
        startAutoSlide();
    });
});