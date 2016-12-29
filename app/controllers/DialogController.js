"use strict";

app.controller("DialogController", function ($mdDialog, FeedbackFactory,$routeParams, CompanyFactory, ModalFactory, $scope) {
	// console.log("feedback first line",feedback );
console.log("$scope.feedback",$scope.feedback); 
let selectedValue;
$scope.customFullscreen = true;
let feedback = ModalFactory.getFeedback();
feedback.message = $scope.message;
feedback.rating = $scope.selectedValue;
console.log("feedback , say what??",feedback );
$scope.message = "";
$scope.selectedValue = null;

// let showAdvanced = function(ev, pfeedback) {
// 	console.log("do we have pfeedback??",pfeedback );
// 	feedback = pfeedback;
// 	console.log("is it in here then??",pfeedback );
// 	    $mdDialog.show({
// 	      templateUrl: 'app/view/partials/ratings.html',
// 	      // templateUrl: 'view/partials/companyfeedback.html',
// 	      controller: 'DialogController',
// 	      parent: angular.element(document.body),
// 	      targetEvent: ev,
// 	      clickOutsideToClose:true,
// 	    });
// 	  };


  $scope.addFeelings = function (feedback, message, selectedValue) {
  	console.log("feedback is what in addfeelingscurrently",feedback );
    // feedback.message = $scope.message;
    // feedback.rating = selectedValue;
    console.log("what would feedback be at this time in history??", feedback);
    //here we push it back up to Firebase...do we know the topicID??
  };
// console.log("feedback yo",feedback );
 // $scope.feedback = feedback;

  $scope.hide = function() {
   
    $mdDialog.hide();
    
  };

  $scope.cancel = function(message, selection, feedback) {
  	feedback.message = message;
  	feedback.rating = selection;
  	console.log("messing round what's scopefeedbkmsg?",$scope.feedback.message );
  	console.log("what is feedback right before cancel than?",feedback );
  	console.log("$scope.message in cancel",$scope.message );
  	console.log("$scope.selectedval in cancel",$scope.selectedValue );
  	//prepare to send to FB!
    $mdDialog.cancel();

  };

  $scope.ratings = [0, 1, 2, 3, 4, 5];

  // $scope.addFeelings = function ($scope.feedback, selectedValue) {
  //   $scope.feedback.message = $scope.message;
  //   $scope.feedback.rating = selectedValue;
  //   console.log("what if i told you feedback is...co",feedback, selectedValue );

  // };



console.log("feedback is now over muaha",feedback );

});