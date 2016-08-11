$(document).ready(function(){

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
};


// Карта

  var points = [
  // Найти координаты: http://www.mapcoordinates.net/ru
  {lat: 59.932, lng: 30.324}
];

$.ajax({
  url: 'https://maps.googleapis.com/maps/api/js',
    dataType: 'jsonp',
  jsonp: 'callback',
  data: {
    // АХТУНГ! Это МОЙ ключ! Заведите свой!
    key: 'AIzaSyADy7FRsZvBvHydrA49XsT48wFIB5XyrzY',
    signed_in: true
  },
  success: mapInit
});

function mapInit() {
  var map = new google.maps.Map($('#map').get(0), {
    center: {lat: 59.932, lng: 30.348},
    zoom: 12,
    // disableDefaultUI: true,
    scrollwheel: false,
  });

  var markers = [];

  points.forEach(function (position, i) {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
    }));
  });
};

});