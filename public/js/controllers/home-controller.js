(function(app) {
	app.controller('HomeController', ['$scope', function($scope) {
		$scope.sliderArr = [
			{
				index:  1,
				header: "LONG TERM USE",
				text:   "A sensor works for months, so you can focus on important things in your life!"
			},
			{
				index:  2,
				header: "DISCREET DESIGN",
				text:   "No adhesives, no wires. Strap on the reader when you want to, take it off when you don't."
			},
			{
				index:  3,
				header: "SIMPLE INTERFACE",
				text:   "Checking your blood sugar is as easy as a glance at your watch or phone."
			}
		]

		var slideFrame = angular.element( document.querySelector( '.slide-frame' ) );
		console.log(slideFrame)

		// slider 
		setInterval(function(){
			var head = $scope.sliderArr[0]
			$scope.sliderArr = $scope.sliderArr.slice(1)
			$scope.sliderArr.push(head)
			$scope.$apply()
		},10000);



	}]);
})(sensorApp);
