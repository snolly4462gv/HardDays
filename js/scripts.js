$(document).ready(function() {

    // menu

    $('.header__mobile-menu-button').click(function(e) {
        e.preventDefault();
        $('.header__menu').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.header__menu').attr('style', '');
        }
    });

    // about

    const aboutSlides = $('#about-slider .about__slide').length;

    $('#about-slider').slick({
        arrows: true,
        autoplay: false,
        infinite: true,
    });

    $('#about .about__slider-num').text('1/' + aboutSlides);

    $('#about-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#about .about__slider-num').text((nextSlide+1) + '/' + aboutSlides);
    });

    // fleet

    const fleetSlides = $('#fleet-slider .about__slide').length;

    $('#fleet-slider').slick({
        arrows: true,
        autoplay: false,
        infinite: true,
    });

    $('#fleet .about__slider-num').text('1/' + fleetSlides);

    $('#fleet-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#fleet .about__slider-num').text((nextSlide+1) + '/' + fleetSlides);
    });

    // certificates

    if ($(window).width() > 767) {
        $('.certificates__slider').slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    } else {
        $('.certificates__slider').slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    if ($(window).width() < 768) {

        $('.certificates__flex').slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.certificates__flex').slick('unslick');
        }
        else {
            $('.certificates__flex').slick({
                arrows: true,
                autoplay: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    });

    //reviews

    if ($(window).width() < 1137) {
        $('.reviews__flex').slick({
            arrows: false,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '199px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '17px'
                    }
                }
            ]
        });
    }

    $(window).resize(function() {
        if ($(window).width() > 1136) {
            $('.partners__flex').slick('unslick');
        }
        else {
            $('.reviews__flex').slick({
                arrows: false,
                autoplay: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '199px',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '17px'
                        }
                    }
                ]
            });
        }
    });

    // partners

    if ($(window).width() < 1137) {
        $('.partners__flex').slick({
            arrows: false,
            autoplay: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '109px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '48px'
                    }
                }
            ]
        });
    }

    $(window).resize(function() {
        if ($(window).width() > 1136) {
            $('.partners__flex').slick('unslick');
        }
        else {
            $('.partners__flex').slick({
                arrows: false,
                autoplay: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '109px',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '48px'
                        }
                    }
                ]
            });
        }
    });


    // products

    $('.products__slider').each(function() {
        const productsSlides = $(this).find('.products__slide').length;
        $(this).parent().find('.products__slider-num').text('1/' + productsSlides);

        $(this).slick({
            arrows: true,
            autoplay: false,
            infinite: true,
        });

        $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(this).parent().find('.products__slider-num').text((nextSlide+1) + '/' + productsSlides);
        });
    });

    // modal

    $('.open-modal').click(function(e) {
        e.preventDefault();

        $('body').addClass('modal-opened');
        $('#modal-form').addClass('modal--opened');
    });

    $('.modal-close').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('modal-opened');
    });

    $('.modal .contact-block--form').click(function(e) {
        e.stopPropagation();
    });



    $('.message__arrow').click(function() {
        $('html, body').animate({ scrollTop: $('.contact-block').offset().top });
    });





   $('body').on('activate.bs.scrollspy', function () {
     console.log('nice');
   })





});


