"use strict";
app.factory("CompanyFactory", function ($http, $location,fbCreds,$routeParams, UserFactory, SearchTerm ) {

    let companies = [];
    let myCompanies = [];

//this function will give an array of Objects that are companies ("healthcare search queried") in Nashville
	 let companySearch = (searchTerms) => {
        console.log("SearchTerms?",searchTerms );
    	return new Promise((resolve, reject) => {
    		$http.get(`http://api.glassdoor.com/api/api.htm?t.p=109943&t.k=V576ve5mwm&userip=50.207.137.70&useragent=Chrome/54.0.2840.98&format=json&v=1&action=employers&country=United States&l=Nashville, TN&q=${searchTerms}`)
    		.success((EmployerObject) => {
                console.log("What is EmployerObject?",EmployerObject );

    			let employerArray = EmployerObject.response.employers;
                companies = [];
    			 employerArray.forEach(( function(element) { 
    			 	companies.push(element);
    			   }));
                  console.log("what are companies?",companies );
                  return companies;
			});
    		resolve(companies);
    	// 	.error((error) => {
    	// 		reject(error);
    	// });
    	// $location.path('/companysearch');
       });
     };	
	  
     let getCompanies = function() {
        return companies;
     };

     let getUserCompanies = function() {
       return myCompanies;
     };

     let getSingleCo = (id) => {
        console.log("running getSinglco");
        // let id = company.id;
        return new Promise((resolve, reject) => {
            $http.get(`${fbCreds.databaseURL}/companies.json?"${id}"`)
            .success((companyObjects) => {
                console.log("success??callingthisviacompanyfeedbackcontroller", companyObjects );
                Object.keys(companyObjects).forEach((key) => {
                    if (id === key) {
                        resolve(companyObjects[key]);
                    }
                });
            })
            .error((error) => {
                reject (error);
            });


            }
            );
        
     };





	let postNewCompany = (companyObject) => {
       
		return new Promise( (resolve, reject) => {
            companyObject.uid = UserFactory.getUser();
            console.log("companyObject.uid",companyObject.uid );
			$http.post(`${fbCreds.databaseURL}/companies.json`, angular.toJson(companyObject))
			.success((companyObject) => {
                console.log("after successful post this is the companyObject:", companyObject );
                // companyObject.companyId = companyObject.name;
				resolve(companyObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};

	let userCompanies = function () {

		
    	return new Promise((resolve, reject) => {
    		$http.get(`${fbCreds.databaseURL}/companies.json`)
    		.success((companyObject) => {
                console.log("what is companyObject?", companyObject);
                myCompanies = [];
    			let companyCollection = companyObject;
    			Object.keys(companyCollection).forEach((key => {
    				companyCollection[key].id = key;
    				myCompanies.push(companyCollection[key]);
    			}));
                console.log("what are myCompanies?",myCompanies );
    			resolve(myCompanies);
    		}).error((error) => {
    			reject(error);
    		});
    	}); 
    };

    let deleteCompany = function (company) {
       return new Promise( (resolve, reject) => {
         $http.delete(`${fbCreds.databaseURL}/companies/${company.id}.json`)
         .success ((data) => {
            console.log("data",data );
            resolve();
         });
       });
    };

  


    // return {getSingleCo};
	return {companySearch, postNewCompany,deleteCompany, getSingleCo, getCompanies, myCompanies, userCompanies, getUserCompanies};
});