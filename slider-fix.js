// Team Members Slider - Swiper Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the team slider
    const teamSwiper = new Swiper('.slider-cotainer', {
        // Enable loop mode
        loop: true,
        
        // Grab cursor on hover
        grabCursor: true,
        
        // Autoplay settings
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Responsive breakpoints
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // When window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // When window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        
        // Speed of transition
        speed: 600,
        
        // Enable keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        
        // Enable mousewheel control
        mousewheel: false,
        
        // Effect (optional - you can change to 'fade', 'cube', 'flip', 'coverflow')
        effect: 'slide'
    });
    
    console.log('Team slider initialized successfully!');
});
