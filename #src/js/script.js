// Все подключаемые файлы в конце

// alert("Js подключен");

$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});

$(document).ready(function() {
    $('.mainslider').slick({
        slidesToShow: 4,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});

$(document).ready(function() {
    $('.mainslider-two').slick({
        slidesToShow: 3,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});

$(document).ready(function() {
    $('.slider-brands').slick({
        slidesToShow: 6,
        arrows: true,
        waitForAnimate: false,
        infinite: true,
    });
});


//Подключение slick
@@include('slick.min.js');
