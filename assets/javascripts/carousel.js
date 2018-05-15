(function ($) {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    variableWidth: true,
    lazyLoad: 'ondemand',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})(jQuery);
