"use strict";
app.factory("FeedbackFactory", function ($http,$mdDialog, fbCreds ) {
	let  feedbackswithId = [];



	let postNewFeedback = (feedbackObject) => {
		return new Promise( (resolve, reject) => {
			// feedbackObject.companyUID = 
			$http.post(`${fbCreds.databaseURL}/feedback.json`, angular.toJson(feedbackObject))
			.success((feedbackObject) => {
				console.log("PostNewFeedback is complete: what's the object??", feedbackObject );
				feedbackObject.name = feedbackObject.topicId;
				resolve(feedbackObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};

		let prepFeedbacks = function () {

			feedbackswithId = [];
	    	return new Promise((resolve, reject) => {
	    		$http.get(`${fbCreds.databaseURL}/feedback.json`)
	    		.success((feedbackObject) => {
	                console.log("what is feedbackObject?", feedbackObject);
	    			let feedbackCollection = feedbackObject;
	    			Object.keys(feedbackCollection).forEach((key => {
	    				feedbackCollection[key].topicId = key;
	    				feedbackswithId.push(feedbackCollection[key]);
	    			}));
	                console.log("what are feedbackswithId?",feedbackswithId );
	    			resolve(feedbackswithId);
	    		}).error((error) => {
	    			reject(error);
	    		});
	    	});
	    };

	let overwriteFeedbacks = function (preppedData) {
			console.log("delete this and override or what??");
			// $http.put(`${fbCreds.databaseURL}/feedback.json`, angular.toJson(preppedData));			
	};

	let labelFeedback = function (feedbackId) {
		let feedbackwithId = [];
		return new Promise((resolve, reject) => {
		$http.get(`${fbCreds.databaseURL}/feedback/${feedbackId}.json`)
		.success((feedbackItem) => {
			console.log("feedbackItem is what?", feedbackItem);
			let singleFeedback = feedbackItem;
			singleFeedback.uid = singleFeedback.name;
			console.log("singlefeedback's uid is?",singleFeedback.name );
			feedbackwithId.push(singleFeedback);
		});
		resolve(feedbackwithId);
	  });
	};

	// let getAllFeedback = function () {

	// 	let feedback = [];
 //    	return new Promise((resolve, reject) => {
 //    		$http.get(`${fbCreds.databaseURL}/feedback.json`)
 //    		.success((feedbackObject) => {
 //    			let feedbackCollection = feedbackObject;
 //    			Object.keys(feedbackCollection).forEach((key => {
 //    				feedbackCollection[key].id = key;
 //    				feedback.push(feedbackCollection[key]);
 //    			}));
 //    			resolve(feedback);
 //    		}).error((error) => {
 //    			reject(error);
 //    		});
 //    	});
 //    };

    	let getAllFeedbackByCo = function (id) {
        	return new Promise((resolve, reject) => {
	    		let FeedbackByCoArray = []; //need to push feedbackObjects[key] to this array in each instance...
        		
        		$http.get(`${fbCreds.databaseURL}/feedback.json?orderBy="id"&equalTo="${id}"`)
        		.success((feedbackObjects) => {
        			console.log("feedbackObjects here is an object of objects",feedbackObjects );
        			Object.keys(feedbackObjects).forEach((key => {
        				console.log("what is feedbackObjects[key]??",feedbackObjects[key] );
        				// if (id) {
        					FeedbackByCoArray.push(feedbackObjects[key]);
        					// resolve (feedbackObjects[key]);
        				// }
        			}));
        			console.log("isn't this the array?",FeedbackByCoArray );
        			resolve (FeedbackByCoArray);
        			// Object.keys(feedbackObjects).forEach((key => {
        			// 	console.log("what is key??",key );
        			// 	console.log("what is id??",id );
        			// 	if (id) {
        			// 		resolve (feedbackObjects[key]);
        			// 	}
        			// }));
        		})
        		.error((error) => {
        			reject(error);
        		});
        	});
        };

        let feedbackUpdate = function () {
        	//put here?
        };

       



	return {postNewFeedback, overwriteFeedbacks, getAllFeedbackByCo, labelFeedback, prepFeedbacks};
});