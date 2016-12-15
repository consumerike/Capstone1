"use strict";
app.factory("CompanyFactory", function ($http, $location,fbCreds,$routeParams, SearchTerm ) {

//this function will give an array of Objects that are companies ("healthcare search queried") in Nashville
	 let companySearch = () => {

    	let companies = [];
    	return new Promise((resolve, reject) => {
    		$http.get("http://api.glassdoor.com/api/api.htm?t.p=109943&t.k=V576ve5mwm&userip=50.207.137.70&useragent=Chrome/54.0.2840.98&format=json&v=1&action=employers&country=United States&l=Nashville, TN&q=healthcare")
    		.success((EmployerObject) => {
    			let employerArray = EmployerObject.response.employers;
    			 employerArray.forEach(( function(element) { 
    			 	companies.push(element);
    			   }));

			}); 
    		resolve(companies);
    	// 	.error((error) => {
    	// 		reject(error);
    	// });
    	// $location.path('/companysearch');
       });
     };	
	  










	let postNewBoard = (boardObject) => {
		return new Promise( (resolve, reject) => {
			$http.post(`${fbCreds.databaseURL}/boards.json`, angular.toJson(boardObject))
			.success((boardObject) => {
				resolve(boardObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};

	let getAllBoards = function () {

		let boards = [];
    	return new Promise((resolve, reject) => {
    		$http.get(`${fbCreds.databaseURL}/boards.json`)
    		.success((boardObject) => {
    			let boardCollection = boardObject;
    			Object.keys(boardCollection).forEach((key => {
    				boardCollection[key].id = key;
    				boards.push(boardCollection[key]);
    			}));
    			resolve(boards);
    		}).error((error) => {
    			reject(error);
    		});
    	});
    };



	return {companySearch, postNewBoard, getAllBoards};
});