"use strict";



app.factory("ModalFactory", function() {
	console.log("we are here!" );

	let feedback = [];

		let addFeedback = function (feedbackObject) {
			 feedback.push( feedbackObject);
			console.log("feedback is in the storage", feedback);
		};

		let  getFeedback = function () {
			console.log("companies are?",feedback);
			return feedback[feedback.length - 1];
		};

	return {addFeedback, getFeedback };

});

