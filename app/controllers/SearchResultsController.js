"use strict";
app.controller("SearchResults", function($scope, CompanyFactory, SearchTerm, UserFactory, $window, $location ) {
	
    // CompanyFactory.companySearch(StorageFactory.companies)
    // .then( (companyArray) => {
    //     $scope.companies = companyArray;
    // });

    let isAuth = () => new Promise((resolve, reject) => {
      UserFactory.isAuthenticated()
      .then( (userExists) => {
        if(userExists) {
          resolve();
        }
        else {
          console.log("You have got to be kidding" );

        }

      });
    });

    let reject = function() {
      console.log("You have got to be kidding" );
    };


   // $scope.companies = StorageFactory.getStorage();
   $scope.companies = CompanyFactory.getCompanies();

   console.log("did companies make it to searchResultCtrl?",$scope.companies);

   // CompanyFactory.companySearch()

   $scope.addCompany = function (company) {
    if (isAuth()){
      console.log("isAuth ??", isAuth() );
    console.log("UserFactory.getUser()", UserFactory.getUser() );
      CompanyFactory.postNewCompany(company)
      .then ( (response) => {
        console.log("what's the response here??",response );
         $scope.$apply();
      });
    }
    else {
      console.log("just in case..." );
    }
     

   };

});


