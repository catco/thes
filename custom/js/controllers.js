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
        $scope.thevarietes = {"infusions" : true, "oolong" : true, "rooiboos" : true, "thés blancs" : true, "thés jaunes" : true, "thés noirs" : true, "thés verts" : true, "non précisé" : true};
	});

}]);