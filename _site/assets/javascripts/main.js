console.log('\'Allo \'Allo!');
(function ($) {

  $.stellar({
      responsive: true,
      hideDistantElements: false      
  });
  $('.fixed-nav').affix({
    offset: {
      top: function () {
        return $('.section').first().offset().top;
      }
    }
  });

  $.fn.extend({
    animateCss: function (animationName, hide) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
              $(this).affix('checkPosition')
        });
        return this;
    }
});
  var outOnce = function(el){
    $(el).one('affix-top.bs.affix', function(ev){
      ev.preventDefault();
      $(ev.target).animateCss('slideOutUp', true);
    })
  }
  outOnce($('.fixed-nav'));

  $('.fixed-nav').on('affix.bs.affix', function(ev){
    $(ev.target).animateCss('slideInDown');
  })
  
  $('.fixed-nav').on('affix-top.bs.affix', function(ev){
    if($(ev.target).hasClass('animated') && $(window).scrollTop() > 200){
        ev.preventDefault(); 
    }
  })

  $('.fixed-nav').on('affixed-top.bs.affix', function(ev){
    if($(this).hasClass('animated')){
      $(this).removeClass('animated slideOutUp')
    }
    else{
      outOnce($('.fixed-nav'))      
    }
  });


  $('#nav').find('a').each(function(i, el){
      var href = $(el).attr('href');
      var offset = (href == '#home') ? 0 : -80;
      $(el).click(function(){
        $(window).scrollTo($('[data-location="'+href.substring(1)+'"]'), {
            duration: 1000,
            offset: offset
        });
      })
     
  })

  new WOW().init({
    live: false
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
