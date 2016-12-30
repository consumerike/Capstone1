"use strict"; 

app.factory("UserFactory", function($location) {
	
	let currentUser = null; 

	let createUser = function(userObj) {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);

	};

	
	let loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);

	};

	let logoutUser = function(userObj) {
		$location.path('#/');
		return firebase.auth().signOut();

	};

	let isAuthenticated = function() {
		return new Promise( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user) {
					currentUser = user.uid;
					console.log('current User', currentUser);
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});

	};

	let getUser = function() {
		return currentUser;
	};



	return {createUser, logoutUser, getUser, loginUser, isAuthenticated};

});