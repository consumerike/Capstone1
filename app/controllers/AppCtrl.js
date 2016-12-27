"use strict";
app.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

$scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      // templateUrl: 'dialog1.tmpl.html',
      templateUrl: 'app/view/partials/ratings.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }



//creating a new controller for modal window.  
//ng-controller is going to be this controller
//still within the companyfeedback.html
//using angular material
//if this doesn't work smoothly, build one with
// adam albrecht, if that doesn't work then 
 // ben 
//nadal tutorial.

//if ben does not work then use the ui-states.




 });