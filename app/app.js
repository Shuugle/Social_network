var routerApp = angular.module("routerApp", ["ui.router"]);



routerApp.config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/Newsfeed");

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
      });

    }
  ]);

