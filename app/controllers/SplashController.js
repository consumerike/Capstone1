"use strict";
app.controller("SplashController", function($scope, SearchTerm, CompanyFactory, UserFactory, $window, $location) {
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

	$scope.companySearch = () => { //normally I would want to put in a search term and pass along
		CompanyFactory.companySearch()
		.then (
		$location.path('/companysearch'));
	};

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
			$location.path = "/myfeedback"; 
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

	$scope.searchText = SearchTerm;


	}); 