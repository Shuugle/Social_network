(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
        
        function Controller(LandingUserService) {
            var vm = this;

            vm.landingUser = null;

            initController();

            function initController() {
                // get current Landinguser
            	LandingUserService.GetCurrent().then(function (landingUser) {
                    vm.landingUser = landingUser;
                });
            }
       }
    }
})();