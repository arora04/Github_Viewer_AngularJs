(function (){

var app = angular.module( "GithubViewer");

var UserController = function( $scope, github, $routeParams){

	var onUserComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user).then( onRepoComplete,onError );
	};
	
	var onRepoComplete = function(data){
		$scope.repos = data;
	};
	
	var onError = function(){
		$scope.error = "Error";
	};
	
	$scope.username = $routeParams.username;
	$scope.repoSortOrder = "-stargazers_count";
	
	github.getUse($scope.username).then(onUserComplete,onError)
};
	app.controller("UserController", UserController );
}()); 