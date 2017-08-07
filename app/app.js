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
          templateUrl: 'newsFeeds/pages/03-Newsfeed.html',
          controller: 'FeedsController'
      })
      
        .state('YourAccount-PersonalInformation', {
          url: '/YourAccount-PersonalInformation',
          templateUrl: 'newsFeeds/pages/28-YourAccount-PersonalInformation.html',
          controllerAs: 'vm',
          controller: 'ProfilePersonalInfoController'
      })
     /* .state('ProfilePage', {
          url: '/ProfilePage',
          templateUrl: 'newsFeeds/pages/02-ProfilePage.html',
          controller: 'ProfileController'
      })
      
      .state('ProfilePage-About', {
          url: '/ProfilePage-About',
          templateUrl: 'newsFeeds/pages/05-ProfilePage-About.html',
          controller: 'ProfileController'
      })
      
      .state('ProfilePage-Friends', {
          url: '/ProfilePage-Friends',
          templateUrl: 'newsFeeds/pages/06-ProfilePage-Friends.html',
          controller: 'ProfileController'
      })
      
      .state('ProfilePage-Photos', {
          url: '/ProfilePage-Photos',
          templateUrl: 'newsFeeds/pages/07-ProfilePage-Photos.html',
          controller: 'ProfileController'
      })
      
      .state('ProfilePage-Videos', {
          url: '/ProfilePage-Videos',
          templateUrl: 'newsFeeds/pages/09-ProfilePage-Videos.html',
          controller: 'ProfileController'
      })
      */
     
    }
  ]);

