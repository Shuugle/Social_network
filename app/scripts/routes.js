	// create the module and name it scotchApp
	var scotchApp = angular.module('socialScotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

		.when('/home', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		
		.when('/16-FavPagesFeed', {
				templateUrl : 'app/16-FavPagesFeed.html',
				controller  : '16-FavPagesFeedController'
			})

			.when('/17-FriendGroups', {
				templateUrl : 'app/17-FriendGroups.html',
				controller  : '17-FriendGroupsController'
			})

			.when('/18-MusicAndPlaylists', {
				templateUrl : 'app/18-MusicAndPlaylists.html',
				controller  : '18-MusicAndPlaylistsController'
			})
			
			.when('/19-WeatherWidget', {
				templateUrl : 'app/19-WeatherWidget.html',
			     controller : '19-WeatherWidgetController'
			})
			
			.when('/20-CalendarAndEvents-MonthlyCalendar', {
				templateUrl : 'app/20-CalendarAndEvents-MonthlyCalendar.html',
			     controller : '20-CalendarAndEvents-MonthlyCalendarController'
			})
			
			.when('/24-CommunityBadges', {
				templateUrl : 'app/24-CommunityBadges.html',
			     controller : '24-CommunityBadgesController'
			})
			
			.when('/25-FriendsBirthday', {
				templateUrl : 'app/25-FriendsBirthday.html',
			     controller : '25-FriendsBirthdayController'
			})
			
			.when('/26-Statistics', {
				templateUrl : 'app/26-Statistics.html',
			     controller : '26-StatisticsController'
			})
			
			/*.when('/27-ManageWidgets', {
				templateUrl : 'app/27-ManageWidgets.html',
			     controller : '27-ManageWidgetsController'
			})*/
			
			
			/*.when('/login', {
				templateUrl : '/login.html',
			     controller : 'loginController'
			})
			
			.when('/signup', {
				templateUrl : '/signup.html',
			     controller : 'signupController'
			})*/
			
			.otherwise({ redirectTo: '/login' });
	});

	scotchApp.controller('mainController', function($scope) {
		
		$scope.message = 'Hello World!';
	});

	
	scotchApp.controller('userRegisterController', function($scope) {
		
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('productController', function($scope) {

		$scope.message = 'Look! I am help page.';
	});

	scotchApp.controller('schoolController', function($scope) {
		$scope.message = '!! This is just a demo.';
	});
	
	scotchApp.controller('orderProductController', function($scope) {
		$scope.message = '!! Happy.';
	});
	
	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
    scotchApp.controller('registrationCardController', function($scope) {
		
		$scope.message = 'Register Card!';
	});
	
	scotchApp.controller('footerController', function($scope) {
		
		$scope.message = 'Hello World!';
	});
	
	