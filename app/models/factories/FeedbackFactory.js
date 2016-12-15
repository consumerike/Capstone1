"use strict";
app.factory("FeedbackFactory", function ($http, fbCreds ) {

	let postNewFeedback = (feedbackObject) => {
		return new Promise( (resolve, reject) => {
			$http.post(`${fbCreds.databaseURL}/feedback.json`, angular.toJson(feedbackObject))
			.success((feedbackObject) => {
				resolve(feedbackObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

	};

	let getAllFeedback = function () {

		let feedback = [];
    	return new Promise((resolve, reject) => {
    		$http.get(`${fbCreds.databaseURL}/feedback.json`)
    		.success((feedbackObject) => {
    			let feedbackCollection = feedbackObject;
    			Object.keys(feedbackCollection).forEach((key => {
    				feedbackCollection[key].id = key;
    				feedback.push(feedbackCollection[key]);
    			}));
    			resolve(feedback);
    		}).error((error) => {
    			reject(error);
    		});
    	});
    };



	return {postNewFeedback, getAllFeedback};
});