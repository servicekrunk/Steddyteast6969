/* --- Master Condensed JavaScript for Steddy Plumbing --- */
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mobile Hamburger Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu-list');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Testimonial Rotator Carousel (Cycles through the reviews automatically)
    const testimonials = document.querySelectorAll('.testimonial-box');
    if (testimonials.length > 0) {
        let currentIndex = 0;
        setInterval(function() {
            testimonials[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].classList.add('active');
        }, 5000); // Switches every 5 seconds
    }

});
