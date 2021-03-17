// Slick slider..................
$(document).ready(function(){
    $('.your-class').slick({

    });
  });

  $('.fade').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: $('.your-class'),
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
  }); 


  // AOS Scroll.................

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// fixed header..................

$(function() {
  let header = $('.header');
  let headerMini = $('.img_logo');
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header__fixed');
     headerMini.addClass('header__mini');
    } else {
     header.removeClass('header__fixed');
     headerMini.removeClass('header__mini');
    }
  });
 });

 $(function() {
  let header = $('.header__content__wrap');
  let hederHeight = header.height(); // вычисляем высоту шапки
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
 });

 if($(this).scrollTop() > 300) {
  header.css({
    'padding': '5px 0',
    'background': '#f6ffdb',
    'transition': '.3s'
  });
} else {
  header.css({
    'padding': '15px 0',
    'background': '#000000',
    'transition': '.3s'
  });
}