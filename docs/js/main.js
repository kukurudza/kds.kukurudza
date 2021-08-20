$(document).ready(function() { 
  // -------------------------------- NAV WITH BURGER -------------------
  $('burger').click(function(e){
    $('.header__menu').slideToggle(700);
}) 
  $(".burger").click(function() {      
      $(".burger").toggleClass("active");
      $(".header__menu").toggleClass("active");
      $(".header__inner").toggleClass("active");
  });  
});  
//---------------------------------SLIDER'S----------------------------
(function($){
  $('.screenshot__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,    
    slidesToShow: 1,
    slidesToScroll: 1,    
    infinite: true,
    appendDots: $('.screenshot__nav'),    
    centerPadding: '30px',
    mobileFirst: true, 
    responsive: [      
      {
        breakpoint: 320,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
    ]
  })
})(jQuery);


$(document).ready(function () {
  $('.feedback__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,    
    slidesToShow: 1,
    slidesToScroll: 1,    
    infinite: true,
    appendDots: $('.feedback__nav'),    
    centerPadding: '30px',
    mobileFirst: true, 
    responsive: [      
      {
        breakpoint: 320,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: { 
          centerMode: true,
          centerPadding: '0',          
          slidesToShow: 3,
          slidesToScroll: 2,
          zIndex: 100,
        }
      },
    ]
  });
});
//---------------------------------BUTTON UP----------------------------
$(document).ready(function(){
  $('body').append('<a href="#" class="button-top" title="Вверх"><i class="fas fa-chevron-up"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "300") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "300") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $(".button-top").scrollToTop();
});
//---------------------------------SMOUTH SCROLLING----------------------------
// $(document).ready(function(){
//   $(".header__menu").on("click","a", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 1500);
//   });
//   });