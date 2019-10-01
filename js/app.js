$(document).ready(function(){
    // MOBILE NAVIGATION
    $(".burger-icon").on("click", function(){
        if($(".main-nav").hasClass("mobile-hide")){
            $(".main-nav").removeClass("mobile-hide");
            $(".main-nav").addClass("mobile-show");
        }else{
            $(".main-nav").addClass("mobile-hide");
            $(".main-nav").removeClass("mobile-show");
        }
    });

//zresetuj scrolla
$.scrollTo(0);

// Animate smooth scrool
$('#view-offers').on('click', function() {
    const offer = $('#offer-title').position().top

    $('html, body').animate({
        scrollTop: offer
    },
        900
    );

});
$('#view-form').on('click', function() {
    const form = $('#application-form').position().top

    $('html, body').animate({
        scrollTop: form
    },
        1400
    );

});
$('#view-contact').on('click', function() {
    const contact = $('#contact').position().top

    $('html, body').animate({
        scrollTop: contact
    },
        1400
    );

});
$('#see-more').on('click', function() {
    const offer = $('#offer-title').position().top

    $('html, body').animate({
        scrollTop: offer
    },
        900
    );

});

//View Top
$('#view-menu').on('click', function() {
    const menu = $('#menu').position().top

    $('html, body').animate({
        scrollTop: menu
    },
        1000
    );

});

//Scroll Up
$('.scrollup').click(function() {
    $.scrollTo($('html, body'), 1000);
    
});

//pokaż podczas przewijania
$(window).scroll(function(){

    if($(this).scrollTop()>500) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();

});

});