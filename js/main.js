// contact button 
$('.button').click(function(){

  let contact = $("#contact").offset().top;
  $('body , html').animate({scrollTop: contact - 50}, 1000);

})


// slideUp button
$(window).on("scroll", function () {
  let services = $("#services").offset().top;
  let wScroll = $(window).scrollTop();

  if (wScroll >= services - 100) {

    $("#slideUp").fadeIn(500);
  } 
  else {

    $("#slideUp").fadeOut(500);
  }
});

$("#slideUp").click(function () {


    $('html , body').animate({scrollTop: 0}, 2000);
  
    
  });



// link scroll to section
$('.nav-link').click( function(e) {

  let section = $(e.target).attr('href');
  let secOffset = $(section).offset().top;

  $('body , html').animate({scrollTop: secOffset - 50}, 1000);
  
})











