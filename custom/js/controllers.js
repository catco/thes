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
        $scope.thevarietes = {infusion : true, oolong : true, rooiboos : true, blanc : true, jaune : true, noir : true, vert : true, np : true};
	});

}]);