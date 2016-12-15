"use strict";
app.controller("SearchResults", function($scope, CompanyFactory, SearchTerm, $location ) {
	
    // CompanyFactory.companySearch(StorageFactory.companies)
    // .then( (companyArray) => {
    //     $scope.companies = companyArray;
    // });

   // $scope.companies = StorageFactory.getStorage();
   $scope.companies = CompanyFactory.getCompanies();

   console.log("did companies make it to searchResultCtrl?",$scope.companies);

   // CompanyFactory.companySearch()

   $scope.addCompany = function (company) {
     CompanyFactory.postNewCompany(company)
     .then ( (response) => {
        $location.path('/');
        $scope.$apply();
     });

   };

});


