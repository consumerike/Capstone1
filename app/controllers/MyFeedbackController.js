"use strict";
app.controller("MyFeedbackController", function (UserFactory, CompanyFactory, $scope) {
	$scope.userName = "Friend";
	$scope.myCompanies = CompanyFactory.getUserCompanies();
	console.log("isn't this weird?",$scope.myCompanies );

	// .then((response) => {
	// 	CompanyFactory.getUserCompanies();
	// });
	// console.log("did it work?",$scope.myCompanies );
	// $scope.myCompanies = CompanyFactory.myCompanies()
	// .then((response) => {
	// 	$scope.gotCompanies = true;
	// 	console.log("what is the response?",response);
	// 	// CompanyFactory.getMyCompanies();
	// 	$scope.myCompanies = response;
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
