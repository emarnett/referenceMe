'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    
    $scope.tags = ["JavaScript","Angular JS","HTML","CSS","Ruby","Misc/other","Funny","Inspiration"];
   


   	$scope.chooseCategory = function(currentCategory) {

    	$rootScope.currentCategory = currentCategory;
    };

  });
