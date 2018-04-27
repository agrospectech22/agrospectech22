$(document).ready(function(){
    var $tractors = $('.tractors');
    $tractors.slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.tractors-nav',
        arrows: false,
        fade: true
    });

    $('.tractors-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.tractors',
        dots: true,
        focusOnSelect: true
    });
});