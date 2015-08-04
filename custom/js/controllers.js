var theControllers = angular.module('theControllers', ['ngAnimate']);
theControllers.controller('SearchController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
		$scope.theOrder = "name";
        $scope.oneAtATime = true;
	});
}]);
theControllers.controller('TypesController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
        $scope.thevarietes = {"infusions" : false, "oolong" : false, "rooiboos" : false, "thés blancs" : false, "thés jaunes" : false, "thés noirs" : false, "thés verts" : false, "non précisé" : false};
        $scope.oneAtATime = true;
        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
                $scope.thevarietes = {"infusions" : true, "oolong" : true, "rooiboos" : true, "thés blancs" : true, "thés jaunes" : true, "thés noirs" : true, "thés verts" : true, "non précisé" : true};
            } else {
                $scope.selectedAll = false;
                $scope.thevarietes = {"infusions" : false, "oolong" : false, "rooiboos" : false, "thés blancs" : false, "thés jaunes" : false, "thés noirs" : false, "thés verts" : false, "non précisé" : false};
            }
            
        };
	});
}]);
theControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('custom/json/appart-thes.json').success(function(data) {
		$scope.thes = data.thes.the;
		$scope.whichItem = Number($routeParams.itemId) - 1;
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
		
}]);