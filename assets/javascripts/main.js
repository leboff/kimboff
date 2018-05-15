console.log('\'Allo \'Allo!');
(function ($) {

  $.stellar({
      responsive: true,
      hideDistantElements: true,
      horizontalScrolling: false      
  });


  

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
  setNav();
  $( window ).resize(function() {
    setNav();
  })

})(jQuery);
