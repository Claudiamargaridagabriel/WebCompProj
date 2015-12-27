var endpoint = 'http://localhost:9000/';
var app = angular.module('cwApp', []);
	app.controller('mainCtrl', function($scope, $http){
		$scope.username = '';
		$http.get(endpoint + 'userInfo').then(function(response){
			$scope.username = 'Doctor ' + response.data.name;
		});
		
	});
	app.controller('patientsCtrl', function($scope, $http){
		$scope.patients = [];
		$http.get(endpoint + 'patients').then(function(response){
			$scope.patients = response.data;
		});
	});
 
	app.controller('loginCtrl', function($scope, $http){
		 $scope.invalidLogin = false;
		 $scope.login = function(){
			$http.post(endpoint + 'login', {username: $scope.username, password: $scope.password})
				.error(function(){
					$scope.invalidLogin = true;
				})
				.success(function(){
					window.location.href = "patients.html";
				});
		 }
	 })