"use strict";
app.factory("FeedbackFactory", function ($http, fbCreds ) {

	let postNewFeedback = (feedbackObject) => {
		return new Promise( (resolve, reject) => {
			// feedbackObject.companyUID = 
			$http.post(`${fbCreds.databaseURL}/feedback.json`, angular.toJson(feedbackObject))
			.success((feedbackObject) => {

				resolve(feedbackObject);
			})
		
		.error( (error) => {
			reject(error);
		});
		}); 

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



	return {postNewFeedback, getAllFeedback, labelFeedback};
});