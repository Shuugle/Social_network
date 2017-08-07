//routerApp.controller('ProfilePersonalInfoController', ["$scope","$window", "UserService", "FlashService","Controller", function($scope, $window, UserService, FlashService, Controller) {
	(function () {
	    'use strict';

	    angular.module('routerApp')
	        .controller('ProfilePersonalInfoController', Controller);
	 function Controller($window, UserService, FlashService) {
	        var vm = this;

	        vm.user = null;
	        vm.saveUser = saveUser;
	        vm.deleteUser = deleteUser;

	        initController();

	        function initController() {
	            // get current user
	            UserService.GetCurrent().then(function (user) {
	                vm.user = user;
	            });
	        }

	        function saveUser() {
	            UserService.Update(vm.user)
	                .then(function () {
	                    FlashService.Success('User updated');
	                })
	                .catch(function (error) {
	                    FlashService.Error(error);
	                });
	        }

	        function deleteUser() {
	            UserService.Delete(vm.user._id)
	                .then(function () {
	                    // log user out
	                    $window.location = '/login';
	                })
	                .catch(function (error) {
	                    FlashService.Error(error);
	                });
	        }
	    }
	})();
	
//}]);
