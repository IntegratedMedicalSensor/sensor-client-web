var sensorApp = angular.module('sensorApp', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/faq',
            templateUrl: 'partials/faq-partial.html',
            controller: 'faqController'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'partials/newsfeed-partial.html',
            controller: 'newsController'
        });
    }]);
})(sensorApp);
