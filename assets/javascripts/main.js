
//= require libraries/jquery-2.2.4.js
//= require libraries/jquery.placepicker.min.js
//= require libraries/jquery.scrollTo.js
//= require libraries/jquery.stellar.js
//= require libraries/wow.js
//= require libraries/noframework.waypoints.js
//= require libraries/slick.min.js
//= require libraries/bootstrap.bundle.js
//= require carousel.js
//= require travel.js

console.log('\'Allo \'Allo!');
(function ($) {

  new WOW().init({
    live: true
  });

  //travel
  $('div.bhoechie-tab-menu>div.list-group>a').click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('div.bhoechie-tab>div.bhoechie-tab-content').removeClass('active');
    $('div.bhoechie-tab>div.bhoechie-tab-content').eq(index).addClass('active');
  });

  function scrollHandler(){
    var href = $(this).attr('href');
    var navHeight = $('#nav').height();
    $(window).scrollTo($('[data-location="'+href.substring(1)+'"]'), {
      duration: 1000,
      offset: -(navHeight+36)
    });
  }
  function setNav(){
    $('#nav').find('a').each(function(i, el){
        $(el).unbind("click", scrollHandler);
        $(el).bind("click", scrollHandler);
    })
  }
  function setParallax(){
    if($('#smallDetector').is(':hidden')){
      $.stellar({
        responsive: true,
        hideDistantElements: true,
        horizontalScrolling: false
      });
    }
    else{
      $.stellar('destroy')
    }
  }
  $( window ).resize(function() {
    setNav();
    setParallax();
  });

  $('a.event-nav-link').click(function(ev){
    ev.preventDefault();
    $(this).tab('show');
  })

  $('.registry-card').hover(function(){
    $(this).addClass('shadow-lg');
  }, function(){
    $(this).removeClass('shadow-lg');
  })

  setNav();
  setParallax();

})(jQuery);
