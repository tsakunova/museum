mapboxgl.accessToken = 'pk.eyJ1Ijoic2NyYXBnaW5nZXIiLCJhIjoiY2t1YmNmMnB5MHBkbzMzcXY0NHZ2Yzd4byJ9.2v2f11l1cQ6jgtb1sia8MQ';
const map = new mapboxgl.Map({
container: 'contact-map', // container ID
style: 'mapbox://styles/mapbox/light-v10', // style URL
center: [2.3364, 48.86091], // starting position
zoom: 15.8, // starting zoom
trackResize: true,

});
const marker1 = new mapboxgl.Marker({
  color: "#000000"
  })
.setLngLat([2.3364, 48.86091])
.addTo(map);
const marker2 = new mapboxgl.Marker({
  color: "#585656"
  })
.setLngLat([2.3333, 48.8602])
.addTo(map);
const marker3 = new mapboxgl.Marker({
  color: "#585656"
  })
.setLngLat([2.3397, 48.8607])
.addTo(map);
const marker4 = new mapboxgl.Marker({
  color: "#585656"
  })
.setLngLat([2.3330, 48.8619])
.addTo(map);
const marker5 = new mapboxgl.Marker({
  color: "#585656"
  })
.setLngLat([2.3365, 48.8625])
.addTo(map);
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());