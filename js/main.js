$(document).ready(function(){
    $('.main_slider').slick({

    });
    $('.about_partners').slick({
        slidesToShow: 5,
        autoplay: true
    });
    $('.about_equipment').slick({
        slidesToShow: 5,
        autoplay: true
                
    });
    $('.about_customers').slick({
        slidesToShow: 5,        
        autoplay: true,
        arrows: true,
    });
    $('.also_maybe_slider').slick({
        slidesToShow: 4,        
        autoplay: true,
        arrows: true,
    });
    $( "#tabs" ).tabs();
});