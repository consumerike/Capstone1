"use strict";
app.controller("SplashController", function($scope, UserFactory, $window) {
	let currentUser = null;
	$scope.account = {
		email: null, 
		password: null, //could also be null
		uid: currentUser
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
			$location.path = "#/myfeedback"; 
					console.log('user logged in', user);


		});
	};
		$scope.logout = () => {
		UserFactory.logoutUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/items/list"; 
					console.log('user logged out');
				});
			};

		


	}); 