"use strict";
app.controller("MyFeedbackController", function (UserFactory, CompanyFactory, FeedbackFactory, $scope, $location) {

	$scope.userName = "Friend";
	$scope.companies = CompanyFactory.getCompanies();

	// UserFactory.getUser().
	// then( (user) => {
	// 	FeedbackFactory.getAllFeedback()
	// 	.then((feedback) => {
	// 		$scope.feedback = true;
	// 	});
		
	// });
});
