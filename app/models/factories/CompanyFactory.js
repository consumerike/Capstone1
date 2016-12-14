"use strict";
app.factory("BoardFactory", function ($http, fbCreds ) {

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



	return {postNewBoard, getAllBoards};
});