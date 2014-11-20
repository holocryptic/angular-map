'use strict';

angular.module('angularMap').provider('mapsContent', function() {

  this.$get = function () {
    
    var mapData = {
      data: [
        {
          description: 'London',
          url: 'images/london.jpg',
          Coordinates: { latitude: 51.535577, longitude: -0.126329 },
        },
        {
         description: 'Vancouver',
          url: 'images/Vancouver.jpg',
          Coordinates: { latitude: 42.36, longitude: -71.04 },
        },
        {
          description: 'Barcelona',
          url: 'images/barcelona.jpg',
          Coordinates: { latitude: 41.40, longitude: 2.17 },
        },
        {
          description: 'Boston',
          url: 'images/boston.jpg',
          Coordinates: { latitude: 42, longitude: -71 },
        },
        {
          description: 'Oslo',
          url: 'images/oslo.jpg',
          Coordinates: { latitude: 59.91, longitude: 10.84 },
        },
        {
         description: 'Paris',
          url: 'images/paris.jpg',
          Coordinates: { latitude: 48.854793, longitude: 2.366286 },
        },
        {
         description: 'Prague',
          url: 'images/prague.jpg',
          Coordinates: { latitude: 50.067604, longitude: 14.442278 },
        },
        {
          description: 'Stockholm',
          url: 'images/stockholm.jpg',
          Coordinates: { latitude: 59.324741, longitude: 18.080243 },
        },
        {
          description: 'Copenhagen',
          url: 'images/copenhagen.jpg',
          Coordinates: { latitude: 55.679011, longitude: 12.587961 },
        },
        {
          description: 'My Dublin',
          url: 'images/dublin.jpg',
          Coordinates: { latitude: 53.338262, longitude: -6.260621 },
        },
        {
         description: 'My Super Gdansk',
          url: 'images/gdansk.jpg',
          Coordinates: { latitude: 54.349883, longitude: 18.716806 },
        }
       
      ]  
    };

    return mapData.data;
  };
});
