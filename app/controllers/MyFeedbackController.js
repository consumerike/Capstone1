"use strict";
app.controller("MyFeedbackController", function (UserFactory, $location, $window, FeedbackFactory,$routeParams, CompanyFactory, $scope) {
	$scope.userName = "Friend";
	$scope.myCompanies = CompanyFactory.getUserCompanies();
	// $scope.companyId = company.id;

	// CompanyFactory.getSingleCo()


	$scope.goToCompanyPage = function (company){
		let companyId = company.id;
		company.topics = [];
	    // company.topicName = $window.prompt("enter topic");
	    // company.rating = $window.prompt("enter topic rating between 1-5");
	    // company.feedbackMsg = $window.prompt("enter your feedback");
		FeedbackFactory.postNewFeedback(company);
		$location.path('/myfeedback/:companyId');

		// . then(FeedbackFactory.labelFeedback());
		// 
		// $scope.$apply());
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
