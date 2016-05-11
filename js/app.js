(function(){
	var app = angular.module( "GithubViewer", ["ngRoute"] );
	
	app.config( function($routeProvider){
		$routeProvider
			.when("/main", {
				
				templateUrl : "main.html",
				controller : "MainCtrl"
			
			}).when("/user/:username", {
				
				templateUrl : "user.html",
				controller : "UserController"
			
			}).when("/repo/:username/:reponame",{
				
				templateUrl : "repo.html",
				controller : "RepoController"
				 
			});
	});
}());