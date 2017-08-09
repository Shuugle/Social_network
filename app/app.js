var routerApp = angular.module('routerApp', ['ui.router']);
          

routerApp.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/Newsfeed');

      $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'home/homeIndex.html',
          controller: 'Home.IndexController',
          controllerAs: 'vm',
          data: { activeTab: 'home' }
      })
      .state('account', {
          url: '/account',
          templateUrl: 'account/accountIndex.html',
          controller: 'Account.IndexController',
          controllerAs: 'vm',
          data: { activeTab: 'account' }
      })
  
      .state('Newsfeed', {
          url: '/Newsfeed',
          templateUrl: 'newsFeeds/03-Newsfeed.html',
          controller: 'FeedsController'
      })
      
        .state('YourAccount-PersonalInformation', {
          url: '/YourAccount-PersonalInformation',
          templateUrl: 'profile/28-YourAccount-PersonalInformation.html',
          controller: 'ProfilePersonalInfoController'
         // data: { 'YourAccount-PersonalInformation' }
      })
     
    });

routerApp.run(function($http, $rootScope, $window){

	console.log('>>>>>>>>>>>>>>>>>' + $window.jwtToken);
	// add JWT token as default auth header
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

    // update active tab on state change
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //$rootScope.activeTab = toState.data.activeTab;
        //$rootScope.url = toState.state.url;
    });
});
// manually bootstrap angular after the JWT token is retrieved from the server
$(function () {
    // get JWT token from server
    $.get('/app/token', function (token) {
        window.jwtToken = token;
        console.log('>>>>>>>>>token>>>>>>>>' + token);
        angular.bootstrap(document, ['routerApp']);
    });
});

