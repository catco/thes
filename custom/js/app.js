var myApp = angular.module('myApp', ['ngRoute','theControllers', 'ui.bootstrap']);
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/search', {
		templateUrl: 'partials/search.html',
		controller: 'SearchController'
//	}).when('/detail/:itemId', {
//		templateUrl: 'partials/details.html',
//		controller: 'DetailsController'
    }).when('/types', {
		templateUrl: 'partials/types.html',
		controller: 'TypesController'
	}).otherwise({
		redirectTo: '/search'
	});
}]); 
