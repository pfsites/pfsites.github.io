$(function() {

  if ($(document).width() <= 768){
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $(this).toggleClass('hamburger-mobile');
      $('.menu').toggleClass('menu_mobile');
    });
  };



  menu_choice = function(link, el) {
    $(link).click(function() {
      $('html, body').animate({ scrollTop: $(el).offset().top }, 'slow');
      return false;
    });
  }
  menu_choice('.arrow', '.about');
  menu_choice('.m_services', '.services');
  menu_choice('.m_about', '.about');
  menu_choice('.m_news', '.news');
  menu_choice('.m_contacts', '.contacts');



  if ($(document).width() >= 1024){
    about_img_height = $('.about .col-md-7').height();
    $('.about .img').css('height',about_img_height);
  }



  $('.services .text').hyphenate();
  $('.reviews .text').hyphenate();



  $('.news .owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });



  $('.reviews .owl-carousel').owlCarousel({
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        }
    }
  });
  

  $('.preloader').fadeOut();

});