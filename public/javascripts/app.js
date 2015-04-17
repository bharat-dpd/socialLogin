var sociallogin = angular.module("sociallogin",["ui.router"]);
sociallogin.config(["$stateProvider", "$urlRouterProvider",function($stateProvider, $urlRouterProvider){
	$stateProvider.state("home",{
		url : "/",
		templateUrl : "/javascripts/login/templates/home.html",
		controller : function($scope){

		}
	}).state("login",{
		url : "/login",
		templateUrl : "/javascripts/login/templates/login.html",
		controller : function($scope){

		}
	}).state("signup",{
		url : "/signup",
		templateUrl : "/javascripts/login/templates/signup.html",
		controller : function($scope){

		}
	});	
}]);