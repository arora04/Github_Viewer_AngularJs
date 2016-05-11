(function(){

var app = angular.module( "GithubViewer" );


var MainController = function( $scope, $interval, $location ){
	
	
	var decrement = function(){
		$scope.countdown -= 1;
		if( $scope.countdown < 1)
		{
			$scope.search($scope.username);
		}
	};
	
	var countdownInterval = null;
	
	var startCountdown = function(){
			countdownInterval = $interval( decrement, 1000, $scope.countdown);
	};
	
	$scope.search = function(username){
		
		if( countdownInterval ){
			$interval.cancel(countdownInterval);
		}
		$location.path("/user/" + username);
	};
	
	
	
	$scope.username = 'angular';
	$scope.countdown = 5;
	startCountdown();
};

app.controller( "MainCtrl", MainController );

}());