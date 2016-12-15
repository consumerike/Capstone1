"use strict";
app.controller("MyFeedbackController", function (UserFactory, FeedbackFactory, $scope, $location) {

	$scope.userName = "Ike";
	$scope.feedback = false;

	// UserFactory.getUser().
	// then( (user) => {
	// 	FeedbackFactory.getAllFeedback()
	// 	.then((feedback) => {
	// 		$scope.feedback = true;
	// 	});
		
	// });
});
