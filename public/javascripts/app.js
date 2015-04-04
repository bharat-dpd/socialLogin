var sociallogin = angular.module("sociallogin",["ui.router"]);
sociallogin.config(["$stateProvider", "$urlRouterProvider",function($stateProvider, $urlRouterProvider){
	$stateProvider.state("signup",{
		url : "/",
		templateUrl : "/javascripts/login/templates/login.html",
		controller : function($scope){

		}
	});	
}]);