'use strict';

angular.module('angularMap')
  .controller('MainCtrl', function ($scope, mapsContent, $document) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'mapsContent'
    ];

    $document.ready(function () {
      //definitions	
      $scope.galleryViewport = $('#gallery-viewport');
      console.log( $scope.galleryViewport);
      var elWIdth = 205;
      var length = mapsContent.length;
      $scope.width = length * elWIdth;
      $scope.galleryViewport.css('width', $scope.width + 'px');
      

      $scope.content = mapsContent;
      console.log($scope.content);
      
      
      $scope.currentPhotoIndex = 0;
      $scope.setIndex = function (index) {
        $scope.currentPhotoIndex = index;
      };

      $scope.isCurrentIndex = function (index) {
        return $scope.currentPhotoIndex === index;
      };

    });

   



  });
