// 畫面載入後初始化
window.addEventListener("DOMContentLoaded", () => {
    console.log("DYFENCO 網站已載入");

    // 淡入動畫
    const fadeElements = document.querySelectorAll('.animate-fade');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    // 漢堡選單
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
    }
});

let currentSlide = 0;
const images = document.querySelectorAll('.scroll-gallery img');
const dotsContainer = document.getElementById('carousel-dots');
const gallery = document.getElementById('carousel');

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function createDots() {
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentSlide = index;
            scrollToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
}

function scrollToSlide(index) {
    const scrollAmount = gallery.clientWidth * index;
    gallery.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    updateDots();
}

function scrollGallery(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    scrollToSlide(currentSlide);
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    scrollToSlide(currentSlide);
}

window.addEventListener("DOMContentLoaded", () => {
    createDots();
    updateDots();
    setInterval(autoSlide, 5000); // 每5秒自動切換
});