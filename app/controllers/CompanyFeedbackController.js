"use strict";
app.controller("CompanyFeedbackController", function($scope, CompanyFactory, FeedbackFactory, $routeParams, $mdDialog) {

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

  // $scope.giveRating = () => {
  //   let promise = modals.open (
  //       " rate", {
  //           rating: "How do you feel about this?"
  //       }
  //   );

  //   promise.then(
  //       //function for resolve,
  //       //function for reject
  //   );
  // }; 

//This is for angular material popup modal...test (it's also currently in appCtrl.js)

    $scope.status = '  ';
    $scope.customFullscreen = true;


  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/view/partials/ratings.html',
      // templateUrl: 'view/partials/companyfeedback.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.Fullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the topic was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  // $scope.addFeelings = function (selectedValue) {
  //   $scope.rating = selectedValue;
  // };

  $scope.addFeelings = function (selectedValue) {
   console.log("this is runing here");
   console.log("what is selectedValue",selectedValue );
   console.log("what is scope.feedback", $scope.feedback );
   console.log("what is $scope.feedback.rating??",$scope.feedback.rating );
    $scope.feedback.rating = selectedValue;
    console.log("$scope.rating is:",$scope.rating );
    console.log("what is scope.feedback.topic?",$scope.feedback.topic );
    console.log("what is scopefeedbackmsg??",$scope.feedback.message);
  };


  function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };



      $scope.cancel = function(selectedValue, $scope) {
        $mdDialog.cancel();

      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    // $scope.showPrerenderedDialog = function(ev) {
    //    $mdDialog.show({
    //      controller: DialogController,
    //      contentElement: '#myDialog',
    //      parent: angular.element(document.body),
    //      targetEvent: ev,
    //      clickOutsideToClose: true
    //    });
    //  };

  //This is going to need to be within
  //the proper emoji script
  // and map function
  $scope.ratings = [0, 1, 2, 3, 4, 5];

  



});
