$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        smartSpeed: 500

    })
    AOS.init({
        once: false
    })

});