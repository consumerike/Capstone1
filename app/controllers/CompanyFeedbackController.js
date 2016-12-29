"use strict";
app.controller("CompanyFeedbackController", function($scope, CompanyFactory, FeedbackFactory, ModalFactory, $routeParams, $mdDialog) {

  FeedbackFactory.prepFeedbacks()
  . then ( (feedbackWtopicId) => {
    console.log("feedbackWtopicsId say what",feedbackWtopicId );
     FeedbackFactory.overwriteFeedbacks(feedbackWtopicId);
  }
   
   
  );

  CompanyFactory.getSingleCo($routeParams.id)
    .then( (companyObject) => {
      console.log("companyObject is what?",companyObject );
      $scope.singleCo = companyObject;
      $scope.$apply();
    } 
    );

//right here we need to have the topics right
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


 $scope.showAdvanced = function(feedback, ev) {
    console.log("got feedback??",feedback );
    // feedback = $scope.feedback;
    ModalFactory.addFeedback(feedback);
    $mdDialog.show({
      templateUrl: 'app/view/partials/ratings.html',
      controller: 'DialogController',
      path: '/myfeedback/:id/:topicId',
      // templateUrl: 'view/partials/companyfeedback.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.Fullscreen // Only for -xs, -sm breakpoints.
    });
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

   
 
  

  // $scope.addFeelings = function (selectedValue) {
  //   $scope.rating = selectedValue;
  // };

 

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
 

  



});