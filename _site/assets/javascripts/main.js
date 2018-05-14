console.log('\'Allo \'Allo!');
(function ($) {

  $.stellar({
      responsive: true,
      hideDistantElements: false      
  });


  $('#nav').find('a').each(function(i, el){
      var href = $(el).attr('href');
      $(el).click(function(){
        $(window).scrollTo($('[data-location="'+href.substring(1)+'"]'), {
            duration: 1000,
            offset: -120
        });
      })
     
  })

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



})(jQuery);
