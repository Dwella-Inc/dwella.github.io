(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space



// $(document).ready(function () {
//   $('.sidenav').sidenav();
//   $(".button-collapse").sideNav();
// });


// Input Field Initializer
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});


// Parallax Initializer
$(document).ready(function(){
  $('.parallax').parallax();
});


// Modal Initializer
$(document).ready(function(){
    $('.modal').modal();
  });
