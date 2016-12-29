"use strict";

app.controller("DialogController", function ($mdDialog, FeedbackFactory,$routeParams, CompanyFactory, ModalFactory, $scope, $http) {
	// console.log("feedback first line",feedback );
console.log("$scope.feedback",$scope.feedback); 
let selectedValue;
$scope.customFullscreen = true;
let feedback = ModalFactory.getFeedback();
feedback.topicId = $routeParams.topicId;
//good to go here...

//start playground//

feedback.message = $scope.message;
feedback.rating = $scope.selectedValue;
console.log("within playground what is feedback",feedback );




//end playground


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


  $scope.addFeelings = function (message, selectedValue) {
  	console.log("what is message in addfeelings?",message );
  	console.log("what is selectedvalue in addfeelings?",selectedValue );
  	feedback.message = message;
  	feedback.rating = selectedValue;
  	console.log("what is feedback in addfeelings??",feedback );
  	//RIGHT HERE TRYING TO PUSH TO FIREBASE
  	// $http.post
    // feedback.message = $scope.message;
    // feedback.rating = selectedValue;
    //here we push it back up to Firebase...do we know the topicID??
  };
// console.log("feedback yo",feedback );
 // $scope.feedback = feedback;

  $scope.hide = function() {
   
    $mdDialog.hide();
    
  };

  $scope.cancel = function(feedback) {

    $mdDialog.cancel();

  };

  $scope.ratings = [0, 1, 2, 3, 4, 5];

  // $scope.addFeelings = function ($scope.feedback, selectedValue) {
  //   $scope.feedback.message = $scope.message;
  //   $scope.feedback.rating = selectedValue;
  //   console.log("what if i told you feedback is...co",feedback, selectedValue );

  // };



console.log("feedback is now over muaha",feedback );
console.log("at end what is $scope.feedback??",$scope.feedback );

});