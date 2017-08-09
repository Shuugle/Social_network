	   routerApp.controller('ProfilePersonalInfoController', Controller);
	    
	 function Controller($window,$http, UserService, FlashService) {
	        var vm = this;
             console.log(vm);
	        vm.user = null;
	        vm.saveUser = saveUser;
	       // vm.deleteUser = deleteUser;

	        initController();
	        function initController() {
	            UserService.GetCurrent().then(function (user) {
	            	console.log(user);
	                vm.user = user;
	            });
	        }

	        function saveUser() {
	            UserService.Update(vm.user)
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
	    };
