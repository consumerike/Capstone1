"use strict"; 

app.controller('LoginController', function($scope, UserFactory, $location, $window){
	let currentUser = null;
	$scope.account = {
		email: null, 
		password: null, //could also be null
		
	};

	// let currentUser= null; 

	// let createUser = function(userObj) {
	// 	return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);

	// };

	

	$scope.register = () => {
		UserFactory.createUser($scope.account)
		.then( (userData) => {
			$scope.login();
			console.log("user registered"); 
		});
	};
	$scope.login = (user) => {
		// currentUser = user.uid;
		UserFactory.loginUser($scope.account)
		.then( (user) => {
			$location.url("/myfeedback"); 
			$scope.$apply();
					console.log('user logged in', user);
		});
	};
		$scope.logout = () => {
		UserFactory.logoutUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/"; 
					console.log('user logged out');
				});
			};

		


	}); 