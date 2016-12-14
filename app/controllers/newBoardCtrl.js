"use strict";

app.controller("newBoardCtrl", function($scope, AuthFactory, $location, BoardFactory) {
	$scope.btnText = "Create Board";
let cool = AuthFactory.getUser(); 
	
		$scope.boardObject = {
			uid: cool,
			Title: null,
			Description: null
		};



	$scope.addBoard = function () {
		console.log('scope.boardObj', $scope.boardObject);
		 BoardFactory.postNewBoard($scope.boardObject)
        .then((response) => {
        	$location.url('/allBoards');
        	
        });
	};
});

