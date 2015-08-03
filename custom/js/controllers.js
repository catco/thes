var theControllers = angular.module('theControllers', ['ngAnimate']);
theControllers.controller('SearchController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
		$scope.theOrder = "name";
	});
}]);
theControllers.controller('TypesController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
        $scope.thevarietes = {oolong : true, rooiboos : false, blanc : false, jaune : false, noir : false, vert : false, np : false};
        myApp.filter('thestypefilter', function () {
          return function(input, filter) {
            var result = [];
            angular.forEach(input, function (the) {
                angular.forEach(filter, function (isfiltered, varieteID) {
                    if (isfiltered && varieteID === the.varieteID) {
                        result.push(the);
                    };
                });
            });
            return result;
          };
        });
	});

}]);
/*theControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
		$scope.whichItem = $routeParams.itemId;
		if ($routeParams.itemId>0) {
			$scope.prevItem = Number($routeParams.itemId) - 1;
		} else {
			$scope.prevItem = $scope.thes.length - 1;
		}
		if ($routeParams.itemId<$scope.thes.length-1) {
			$scope.nextItem = Number($routeParams.itemId) + 1;
		} else {
			$scope.nextItem = 0;
		}
	});
		
}]);*/