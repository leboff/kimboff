(function ($) {

  var origin, destination;
  var WATER_WORKS_PLACE_ID = 'ChIJUWi_rLbHxokRjLQnQDmpamw';
  var LOGAN_PLACE_ID = 'ChIJ2ZjMpDPGxokRcVf4cID2o3o';
  destination = WATER_WORKS_PLACE_ID;
  
  $('.destination>a').click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    if (id == 'dest-waterworks') destination = WATER_WORKS_PLACE_ID;
    if (id == 'dest-logan') destination = LOGAN_PLACE_ID;
    updateMap();
  })
  $('.placepicker').placepicker({
    placeChanged: function (data) {
      origin = data.place_id;
      updateMap();
    }
  });
  var directionsTemplate = _.template('//www.google.com/maps/embed/v1/directions?' +
    'key=AIzaSyCkJd4wwnJr1-KYHLFJU58ID2cM3evahcg' +
    '&origin=place_id:<%= origin_id %>' +
    '&destination=place_id:<%= destination_id %>');
  var updateMap = function () {
    if (origin && destination) {
      var mapUrl = directionsTemplate({
        origin_id: origin,
        destination_id: destination
      })
      $('#directions').attr('src', mapUrl);
      $('#directions').ready(function(){
        $('#directions').show();
      })
    }
  }


})(jQuery);
