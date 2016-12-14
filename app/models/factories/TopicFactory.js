// app.factory("PinFactory", function ($http, fbCreds, AuthFactory) {
// 	let postNewPin = function (pinObject) {
// 		return new Promise( (resolve, reject) => {
// 			$http.post(`${fbCreds.databaseURL}/pins.json`, angular.toJson(pinObject))
// 			.success((pinObject) => {
// 			pinObject.uid = AuthFactory.getUser();
// 			let pinId = pinObject.name
// 			$http.put(`${fbCreds.databaseURL}/pins/${pinId}.json`, pinObject)
// 			resolve(pinObject);
// 			})
		
// 		.error( (error) => {
// 			reject(error);
// 		});
// 		}); 

// 	let getPins = function () {
// 		let pins [];
// 		return $q( (resolve, reject) => { //q is equivalent to "new Promise" and has the benefit of $scope.apply()
// 			$http.get(`${fbCreds.URL}/pins.json?orderBy="$pinId"&`)//query by selected board
// 			.success ( (pinsObject) => {
// 				Object.keys(pinsObject).forEach(function (key) {
// 					pins.push(pinsObject[key]);
// 				});
// 			resolve(pinsObject);
// 			})
// 			.error( (error) => {
// 				reject(error);
// 			});
// 		});
// 	};

// 	};

// 	return {postNewPin, getPins};
// })