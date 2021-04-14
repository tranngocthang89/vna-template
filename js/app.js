var swiper = new Swiper('.feature-product-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 28,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.button-swiper-home-next',
        prevEl: '.button-swiper-home-prev',
    },
});
