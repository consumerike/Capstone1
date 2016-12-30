"use strict";
app.controller("SplashController", function($scope, CompanyFactory, $location) {
	// let currentUser = null;
	// $scope.account = {
	// 	email: null, 
	// 	password: null, //could also be null
	// 	uid: currentUser
	// };

	$scope.searchText = null;

	// let currentUser= null; 

	// let createUser = function(userObj) {
	// 	return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);

	// };

	$scope.search = (searchTerm) => { //normally I would want to put in a search term and pass along
		CompanyFactory.companySearch(searchTerm)
		.then( (response) => {
			// console.log("what is the response?", response);
			// StorageFactory.addStorage(response);
			$scope.$apply();
			$location.url('/companysearch');
		});
	};

	$scope.navItems = [


	{name: "Logout", url: '#/logout'},
	{name: "My Companies", url:'#/myfeedback'},

	];

	// $scope.register = () => {
	// 	UserFactory.createUser($scope.account)
	// 	.then( (userData) => {
	// 		$scope.login();
	// 		console.log("user registered"); 	
	// 	});
	// };
	// $scope.login = (user) => {
	// 	// $location.path = "/myfeedback";
	// 	// // currentUser = user.uid;
	// 	UserFactory.loginUser($scope.account)
	// 	.then( (user) => {
	// 		$location.url("/myfeedback"); 
	// 		$scope.$apply();
	// 		console.log('user logged in', user);


	// 	});
	// };
	// 	$scope.logout = () => {
	// 	UserFactory.logoutUser($scope.account)
	// 	.then( (user) => {
	// 		$location.path("/items/list"); 
	// 				console.log('user logged out');
	// 			});
	// 	};

	// $scope.searchText = SearchTerm;
	// let searchTerm = $scope.searchText;	

	// $scope.searching = function(searchTerm) {
	// 	console.log("what is what is search term?",searchTerm );
	// 	CompanyFactory.companySearch(searchTerm);
	// };


	}); 