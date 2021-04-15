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

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 18,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-thumb-next',
        prevEl: '.swiper-button-thumb-prev',
    },
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 0,

    thumbs: {
        swiper: galleryThumbs
    }
});
