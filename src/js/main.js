$(document).ready(function(){
    $('.your-class').slick({

    });
  });

  $('.fade').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: $('.your-class'),
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear'
  }); 