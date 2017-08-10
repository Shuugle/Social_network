	   routerApp.controller('ProfilePersonalInfoController', function ($window,$http, UserService, FlashService, $scope) {
	        var vm = this;
	        $scope.vm = { };
            console.log(vm);
	        vm.user = null;
	       // vm.deleteUser = deleteUser;

	        initController();
	        function initController() {
	            UserService.GetCurrent('Bearer ' + $window.jwtToken).then(function (user) {
	                vm.user = user;
	                $scope.vm.user = user;
	                console.log($scope.vm.user);
	               console.log(vm.user);
	            });
	        }

	        $scope.saveUser =  function() {
	        	console.log("entered");
	            UserService.Update($scope.vm.user, 'Bearer ' + $window.jwtToken)
	                .then(function () {
	                    FlashService.Success('User updated');
	                     console.log("updated successfully");
	                })
	                .catch(function (error) {
	                    FlashService.Error(error);
	                    console.log(error);
	                });
	        }

	   /*     function deleteUser() {
	            UserService.Delete(vm.user._id)
	                .then(function () {
	                    // log user out
	                    $window.location = '/login';
	                })
	                .catch(function (error) {
	                    FlashService.Error(error);
	                });
	        }*/
	    });
	    

