$(function() {

  if ($(document).width() <= 768){
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $(this).toggleClass('hamburger-mobile');
      $('.menu').toggleClass('menu_mobile');
    });
  };



  $('.banner .arrow').click(function() {
    $('html, body').animate({ scrollTop: $('.banner').height() }, 'slow');
    return false;
  });
  $('.m_services').click(function() {
    $('html, body').animate({ scrollTop: $('.main .services').offset().top}, 'slow');
    return false;
  });
  $('.m_about').click(function() {
    $('html, body').animate({ scrollTop: $('.main .about').offset().top}, 'slow');
    return false;
  });
  $('.m_news').click(function() {
    $('html, body').animate({ scrollTop: $('.main .news').offset().top}, 'slow');
    return false;
  });
  $('.m_contacts').click(function() {
    $('html, body').animate({ scrollTop: $('.main .contacts').offset().top}, 'slow');
    return false;
  });


  about_img_height = $('.about .col-md-7').height();
  $('.about_img').css('height',about_img_height);



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
  

});