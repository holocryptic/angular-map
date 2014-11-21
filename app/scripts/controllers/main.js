'use strict';

angular.module('angularMap')
  .controller('MainCtrl', function ($scope, mapsContent, $document, geolocation, $window) {

    $document.ready(function ($) {
      //Definitions	
      $scope.galleryViewport = $('#gallery-viewport');
      var elWIdth = 205;
      var length = mapsContent.length;
      $scope.width = (length+1) * elWIdth;
      $scope.content = mapsContent;
      
      //Gallery functionality 
      $scope.currentPhotoIndex = 0;
      $scope.setIndex = function (index) {
        $scope.currentPhotoIndex = index;
      };

      $scope.isCurrentIndex = function (index) {
        return $scope.currentPhotoIndex === index;
      };

      //Google maps stuff
      //Default center point
      $scope.map = { 
        center: { 
          latitude: 45, 
          longitude: -73 
        }, zoom: 4 
      };
      


      // get user location
      $scope.getUserLocation = function() {
        $window.logGeolocationPermissionReq();
        geolocation.getLocation().then(function(data) {
          $scope.currentCoords = {
            lat  : data.coords.latitude,
            long : data.coords.longitude
          };

          // temporarily places us in Hype Park, London, which is useful when developing
          // appState.coords = {
          //  lat  : 51.507268,
          //  long : -0.16573
          // };
          console.log( 'was able to get user location: ', $scope.currentCoords );
        }, function(error) {
          console.log( error );
        });
      };

    });

  });
