(function () {
    'use strict';

    angular.module('app', ['ui.router', 'socialScotchApp','socialNetServiceApp'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        //$urlRouterProvider.otherwise({redirectTo: '/01-LandingPage'});

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
            
              .state('socialNetApp', {
                url: '/socialNetApp',
                templateUrl: 'socialNetApp.html',
                controller: 'feedsCtrl',
            })
            .state('03-Newsfeed', {
                url: '/03-Newsfeed',
                templateUrl: '03-Newsfeed.html',
                controller: '03-NewsFeedCtrl',
                controllerAs: 'vm',
                data: { activeTab: '03-NewsFeed' }
            })
                .state('16-FavPagesFeed', {
                url: '/16-FavPagesFeed',
                templateUrl: '16-FavPagesFeed.html',
                controller: '16-FavPagesFeedCtrl',
            })
                .state('17-FriendGroups', {
                url: '/17-FriendGroups',
                templateUrl: '17-FriendGroups.html',
                controller: '17-FriendGroupsCtrl',
            })
                .state('18-MusicAndPlaylists', {
                url: '/18-MusicAndPlaylists',
                templateUrl: '18-MusicAndPlaylists.html',
                controller: '18-MusicAndPlaylistsCtrl',
            })
                .state('19-WeatherWidget', {
                url: '/19-WeatherWidget',
                templateUrl: '19-WeatherWidget.html',
                controller: '19-WeatherWidgetCtrl',
            })
                .state('20-CalendarAndEvents-MonthlyCalendar', {
                url: '/20-CalendarAndEvents-MonthlyCalendar',
                templateUrl: '20-CalendarAndEvents-MonthlyCalendar.html',
                controller: '20-CalendarAndEvents-MonthlyCalendarCtrl',
            })
                .state('24-CommunityBadges', {
                url: '/24-CommunityBadges',
                templateUrl: '24-CommunityBadges.html',
                controller: '24-CommunityBadgesCtrl',
            })
                .state('25-FriendsBirthday', {
                url: '/25-FriendsBirthday',
                templateUrl: '25-FriendsBirthday.html',
                controller: '25-FriendsBirthdayCtrl',
            })
                .state('26-Statistics', {
                url: '/26-Statistics',
                templateUrl: '26-Statistics.html',
                controller: '26-StatisticsCtrl',
            })
                .state('27-ManageWidgets', {
                url: '/27-ManageWidgets',
                templateUrl: '27-ManageWidgets.html',
                controller: '27-ManageWidgetsCtrl',
            })
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            angular.bootstrap(document, ['app']);
        });
    });
})();