const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    spaceBetween: 15,

    // If we need pagination
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
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        620: {
            slidersPerView: 3
        },
        750: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 5
        },
        880:
        {
            slidesPerView: 6
        },
        1024: {
            slidesPerView: 7
        }
    }

});