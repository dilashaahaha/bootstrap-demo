/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  
  $('section').each(function() {
    var currentSection = $(this);
    var sectionTop = currentSection.offset().top - 100;
    var sectionId = currentSection.attr('id');
    
    if (scrollPosition >= sectionTop) {
      $('.nav-link').removeClass('active');
      $('a[href="#' + sectionId + '"]').addClass('active');
    }
  });
});

// Back to Top Button
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('#backToTop').removeClass('d-none').fadeIn();
  } else {
    $('#backToTop').fadeOut();
  }
});

$('#backToTop').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 800);
});

// Image zoom on hover
$(".card-img-top").hover(
  function() {
    $(this).css("transform", "scale(1.05)");
  },
  function() {
    $(this).css("transform", "scale(1)");
  }
);