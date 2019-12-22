
$(document) .ready(function(){
    $(".owl-carousel") .owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });
    $(".") .owlCarousel({
        item:1,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        loop: true,
        dots: true,
    });
});