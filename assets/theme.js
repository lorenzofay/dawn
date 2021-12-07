$(document).ready(function(){
    $('.testimonials-slider').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
dots:true,
autoplay: true,
autoplaySpeed: 5000,
responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
        breakpoint: 1008,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
    }
    );
});

var cw = $('.testimonial-img-container img').width();
$('.testimonial-img-container img').css({'height':cw+'px'});