"use strict"; 

var app = angular.module("Upship", ["ngRoute"]); 

let isAuth = (UserFactory) => new Promise((resolve, reject) => {
	UserFactory.isAuthenticated()
	.then( (userExists) => {
		if(userExists) {
			resolve();
		}
		else {
			reject();
		}
	});
});

app.run (($location, fbCreds) => {
	let creds = fbCreds; 
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL

	}; 
	firebase.initializeApp(authConfig); 
}); 

app.config( function($routeProvider) {
	$routeProvider
	.when('/', { 
		templateUrl: 'app/view/partials/login.html',
		controller: 'LoginController'


	})

	.when('/companysearch', { 
		templateUrl: 'app/view/partials/companysearch.html',
		controller: 'SearchResults'

	})

	

	.when('/login', { 
		templateUrl: 'app/view/partials/login.html',
		controller: 'LoginController'
	
	})
	.when('/myfeedback', {
		templateUrl: 'app/view/partials/myfeedback.html',
		controller: 'MyFeedbackController'
	})	
	.when('/companyfeedback/:companyId', {
		templateUrl: 'app/view/partials/companyfeedback.html',
		controller: 'CompanyFeedbackController',
		resolve: {isAuth}

	})	
	.when('/topic/:topicID', {
		templateUrl: 'app/view/partials/topicmodal.html',
		controller: 'TopicController',
		resolve: {isAuth}

	})
	.otherwise('/');

});