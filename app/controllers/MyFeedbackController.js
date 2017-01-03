"use strict";
app.controller("MyFeedbackController", function (UserFactory, $location, $window, FeedbackFactory,$routeParams, CompanyFactory, $scope) {
	CompanyFactory.userCompanies()
	.then ((allTheCompanies)=> {
		console.log("allTheCompanies?", allTheCompanies );
		$scope.myCompanies = allTheCompanies;
		$scope.$apply();
	});

	$scope.updateView = () => {
		CompanyFactory.userCompanies()
		.then ((allTheCompanies)=> {
			console.log("allTheCompanies?", allTheCompanies );
			$scope.myCompanies = allTheCompanies;
			$scope.$apply();
		});
	};

	$scope.userName = "Friend";

	// $scope.companyId = company.id;

	// CompanyFactory.getSingleCo()

	$scope.deleteCompany = function (company) {
		CompanyFactory.deleteCompany(company)
		.then( function () {
			$scope.updateView();

		});
		
	};

	$scope.goToCompanyPage = function (company){
		// let id = company.id;
		console.log("this ran but does nothing" );
		// company.topics = [];
	    // company.topicName = $window.prompt("enter topic");
	    // company.rating = $window.prompt("enter topic rating between 1-5");
	    // company.feedbackMsg = $window.prompt("enter your feedback");
		// FeedbackFactory.postNewFeedback(company)
		// .then(
		// 	console.log("companyId here??",companyId )	
		// );
		
		// $location.path('/myfeedback/:id');

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
