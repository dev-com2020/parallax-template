$(document).ready(function(){
  $('.carousel').carousel();
});

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space

