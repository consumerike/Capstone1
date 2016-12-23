"use strict";
app.controller("SearchResults", function($scope, CompanyFactory, SearchTerm, UserFactory, $location ) {
	
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
    console.log("does it work at this point or not?" );
      CompanyFactory.postNewCompany(company)
      .then ( (response) => {
        console.log("the response of the post is the FBgeneratedID:",response );
        $scope.$apply();
        $location.url('/myfeedback');

      });
    }
    else {
      console.log("just in case..." );
    }
     

   };


});


