"use strict";
app.controller("CompanyFeedbackController", function($scope, CompanyFactory, $routeParams) {

  CompanyFactory.getSingleCo($routeParams.companyId)
    .then( (companyObject) => {
      console.log("companyObject is what?",companyObject );
      $scope.collective = companyObject;
      
      
      console.log("what is COID?",$scope.collective.id);
      $scope.$apply();
    } 
    );

});
