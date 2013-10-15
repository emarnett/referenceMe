'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $rootScope, $routeParams) {
    
  		$scope.links = hipchatLinks;
  		$scope.comments = $scope.links.comments;
  		$scope.selectedTag = $routeParams.selectedTagInURL;

  		
  		$scope.isTag = function(link){
    		//return (link.tag == $rootScope.currentCategory);
    		return (link.tag == $routeParams.selectedTagInURL);
		};

  });
