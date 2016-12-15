"use strict";
app.controller("SearchResults", function($scope, CompanyFactory, SearchTerm ) {
	// $scope.searchText = SearchTerm;
    CompanyFactory.companySearch()
    .then( (companyArray) => {
        $scope.companies = companyArray;
    });

});


