'use strict';

angular.module('angularMap')
  .controller('MainCtrl', function ($scope, mapsContent, $document) {

    $document.ready(function ($) {
      //Definitions 
      $scope.galleryViewport = $('#gallery-viewport');
      var elWIdth = 205;
      var length = mapsContent.length;
      $scope.width = (length+1) * elWIdth;
      $scope.content = mapsContent;

      //Default Google maps center point
      $scope.map = { 
        center: { 
          latitude: 48, 
          longitude: 2 
        }, 
        zoom: 4 
      };
      
      //Gallery functionality 
      $scope.currentPhotoIndex = 0;
      $scope.setIndex = function (index) {
        $scope.currentPhotoIndex = index;

        //Change google map center according to active photo on click
        $scope.map.center = $scope.content[index].Coordinates;
      };

      $scope.isCurrentIndex = function (index) {
        return $scope.currentPhotoIndex === index;
      };

    });

  });
