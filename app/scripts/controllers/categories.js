'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $rootScope) {
    
  		$scope.links = hipchatLinks;
  		$scope.comments = $scope.links.comments;

  		
  		$scope.isTag = function(link){
    		return (link.tag == $rootScope.currentCategory);
		};

  });
