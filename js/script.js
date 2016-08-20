$(document).ready(function(){

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
};

});

// GoogleMap
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 59.93222, lng: 30.324154},
    scrollwheel: false
  });

  setMarkers(map);
}

var points = [
  ['Fluger', 59.93222, 30.324154],
];

function setMarkers(map) {
  var image = {
    url: 'img/contacts-icon-map.png',
    size: new google.maps.Size(86, 26),
    anchor: new google.maps.Point(75, 26)
  };

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image,
      title: point[0]
    });
  }
}