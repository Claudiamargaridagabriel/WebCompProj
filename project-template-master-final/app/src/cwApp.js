var endpoint = 'http://localhost:9000/';
var app = angular.module('cwApp', []);

app.controller('mainCtrl', function($scope, $http){
	$scope.username = '';
	$http.get(endpoint + 'userInfo').then(function(response){
		$scope.username = 'Doctor ' + response.data.name;
	});
	
	
	
	$http.get(endpoint + 'requests').then(function(response){
		$scope.requests = response.data;
	});
	
	
});
app.controller('patientsCtrl', function($scope, $http){
	$scope.patients = [];
	$http.get(endpoint + 'patients').then(function(response){
		$scope.patients = response.data;
	});
});




app.controller('patientCtrl', function($scope, $http, $location){
	$scope.findAct = function(actId){
		for(var i=$scope.acts.length;--i>-1;){
			if(actId === $scope.acts[i].actID)
				return $scope.acts[i];
		}
	}
	$scope.findActReimbursement = function(actId){
		for(var i=$scope.actsReimbursement.length;--i>-1;){
			if(actId === $scope.actsReimbursement[i].actID && $scope.patient.policy_type==$scope.actsReimbursement[i].policy_type)
				return $scope.actsReimbursement[i].reimb_percentage;
		}
	}
	
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	$http.get(endpoint + 'acts').then(function(response){
		$scope.acts = response.data;
	});
	$http.get(endpoint + 'actsReimbursement').then(function(response){
		$scope.actsReimbursement = response.data;
	});
	$http.get(endpoint + 'patientData/' + getParameterByName('patId')).then(function(response){
		$scope.patient = response.data.patient;
		$scope.reports = response.data.reports;
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