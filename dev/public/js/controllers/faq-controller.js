(function(app) {
	app.controller('faqController', ['$scope', function($scope) {
		console.log("faq")
		$scope.faqArr = [
			{
				active: true,
				question: "What is your story?",
				answer: "Eight years ago, our founders got the opportunity to work on amazing technologies at world’s leading research institute (California Institute of Technology). Inspired by an inspiration to improve the lives of family and friends, our founders decided to develop a glucose sensing solution that will make it possible for everyone to manage their chronic condition regardless of their income, age and geographical location. After our founders graduated, they continued to pursue their dreams and formed the company to make this technology a product that can transform lives of people living with diabetes."
			},
			{
				active: true,
				question: "How are you currently  funded?",
				answer: "We want to ensure we can deliver on the promise of an affordable and yet effective solution that will work for any patient. Therefore, we are very careful in choosing the funding we work with. We are currently funded by funding from National Institute of Health and Nation Science Foundation, both of which are interested in improving status of healthcare and technology in US and create more jobs, without any attempt to increase their profit under all conditions. We have also won some awards and provided some consulting to get funds without any strings attached so we can focus on our vision."
			},
			{
				active: true,
				question: "What is your future fundraising plan?",
				answer: "We want to work with mission aligned partners who can support our effort."
			},
			{
				active: true,
				question: "What is your current status?",
				answer: "We have tested the system in small animals and are working to get approval to test it in human subjects before we can start clinical trials for FDA approval."
			},
			{
				active: true,
				question: "How can I help?",
				answer: "Our focus is to deliver a solution for you and your loved ones. We need your support at every step. You can help us with resources (funding, expertise), in raising public awareness, and in getting our morales high. Please contact us and we will love to talk."
			},

		]
			$scope.deactiveArticle = function (index) {
				$scope.faqArr[index].active? $scope.faqArr[index].active=false :$scope.faqArr[index].active=true;  
			}

	}]);
})(sensorApp);
