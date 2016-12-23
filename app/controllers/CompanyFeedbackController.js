"use strict";
app.controller("CompanyFeedbackController", function($scope, CompanyFactory, FeedbackFactory, $routeParams) {

  CompanyFactory.getSingleCo($routeParams.id)
    .then( (companyObject) => {
      console.log("companyObject is what?",companyObject );
      $scope.singleCo = companyObject;
      $scope.$apply();
    } 
    );


    FeedbackFactory.getAllFeedbackByCo($routeParams.id)
  .then( (feedbackArray) => {
      console.log("what is the feedback array look like now?",feedbackArray );
      // feedbackArray = feedback;

      $scope.feedbacks = feedbackArray;
      $scope.$apply();
  }
  );

  $scope.updateList = () => {
          FeedbackFactory.getAllFeedbackByCo($routeParams.id)
        .then( (feedbackArray) => {
            console.log("what is the feedback array look like now?",feedbackArray );
            // feedbackArray = feedback;

            $scope.feedbacks = feedbackArray;
            $scope.$apply();
        }
        );
  };



  // FeedbackFactory.getAllFeedbackByCo()
  // .then ( 
  //       (ArrayOfFeedbackObjects) => {
  //           console.log("calling getAllFeedback..inCofeedbackCtrl", ArrayOfFeedbackObjects );
  //           $scope.feedbacks = ArrayOfFeedbackObjects;
  //       }
  // );


  $scope.newFeedback = {
  	topic: "",
  	rating: [{"date": Date.now()}],
  	message: "",
  	id: $routeParams.id

  };
  $scope.btnText = "Add";

  $scope.addNewFeedback = () => {
  	FeedbackFactory.postNewFeedback($scope.newFeedback)
  	.then((posted) => {
  		$scope.newFeedback.topic = "";
        $scope.updateList();
  		$scope.$apply();
  	});

  FeedbackFactory.getAllFeedbackByCo($routeParams.id)
  .then( (feedbackArray) => {
  	  console.log("what is the feedback array look like now?",feedbackArray );
  	  // feedbackArray = feedback;

      $scope.feedbacks = feedbackArray;
      $scope.$apply();
  }
  );
  };

});
