"use strict";
app.controller("MyFeedbackController", function (UserFactory, $window, FeedbackFactory, CompanyFactory, $scope) {
	$scope.userName = "Friend";
	$scope.myCompanies = CompanyFactory.getUserCompanies();
	console.log("isn't this weird?",$scope.myCompanies );

	$scope.addFeedback = function (company){
		company.topics = [];
	    company.topicName = $window.prompt("enter topic");
	    company.rating = $window.prompt("enter topic rating between 1-5");
	    company.feedbackMsg = $window.prompt("enter your feedback");
		FeedbackFactory.postNewFeedback(company);
      };
	
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
