$(document).ready(function () {

    var width = $(window).width();

    if (width <= 768) {
        $('.logo > img').attr('src', '/images/logo-m.png')
        slider();
    } else {
        console.log($('.logo > img').attr());
        $('.logo > img').attr('src', '/images/logo.png')
    }

    function slider() {
        $('.gallery__list').slick({
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        });   
    }
});