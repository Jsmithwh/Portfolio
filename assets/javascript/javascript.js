$('.navbar-burger').click(function() {
    $('#navbarBasicExample, .navbar-burger').toggleClass('is-active');
  });

  //makes headers sticky

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
