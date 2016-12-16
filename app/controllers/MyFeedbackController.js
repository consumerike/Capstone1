"use strict";
app.controller("MyFeedbackController", function (UserFactory, CompanyFactory, $scope) {

	$scope.userName = "Friend";
	$scope.myCompanies = CompanyFactory.myCompanies();
	// .then((response) => {
	// 	$scope.companies = true;
	// 	console.log("what is the response?",response );
	// 	// CompanyFactory.getMyCompanies();
	// 	$scope.companies = response;
	// 	console.log("so is scopecompanies?",$scope.companies );
	// });

	// UserFactory.getUser().
	// then( (user) => {
	// 	FeedbackFactory.getAllFeedback()
	// 	.then((feedback) => {
	// 		$scope.feedback = true;
	// 	});
		
	// });
});
