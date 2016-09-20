app.controller('AsideCtrl', ['$scope', '$rootScope', '$state', '$mdSidenav', '$mdDialog', function ($scope, $rootScope, $state, $mdSidenav, $mdDialog) {

    $scope.User = "Guest User";
    $scope.UserEmail = "guest@domain.com";
    $scope.customFullscreen = false;
    $scope.PageHeader = "Products";
    $scope.menu = [];
    $scope.admin = [];

    $scope.LogOut=function(){
        $scope.User = "Guest User";
        $scope.UserEmail = "guest@domain.com";
        $scope.menu = [
                {
                    id: 1,
                    title: 'Product List',
                    icon: 'list'
                }
            ];
            $scope.admin = [
                {
                    id: 4,
                    title: 'Login',
                    icon: 'login'
                }
            ];
        $rootScope.adminFlag = false;
        $rootScope.managerFlag = false;
        $rootScope.storeKeeper = false;
        sessionStorage.removeItem(sessionStorage.key(0));
        $state.go('products', {to: $state.current.name}, {reload: true});
    }
    $scope.InitializedController = function () {
        $rootScope.adminFlag = false;
        $rootScope.managerFlag = false;
        $rootScope.storeKeeper = false;
        
        if (sessionStorage.LoginUser == undefined) {
            $scope.menu = [
                {
                    id: 1,
                    title: 'Product List',
                    icon: 'list'
                }
            ];
            $scope.admin = [
                {
                    id: 4,
                    title: 'Login',
                    icon: 'login'
                }
            ];

        } else {
            var UserDet = sessionStorage.LoginUser;
            UserDet=JSON.parse(UserDet);
            
            $scope.User = UserDet.Name;
            $scope.UserEmail = UserDet.Email;
            
            
            if (UserDet.Type.Id == "Admin") {
                $rootScope.adminFlag = true;
                $scope.menu = [
                    {
                        id: 1,
                        title: 'Product List',
                        icon: 'list'
                    },
                    {
                        id: 3,
                        title: 'Manage Products',
                        icon: 'storage'
                    }
                ];
                $scope.admin = [
                    {
                        id: 5,
                        title: 'Add User',
                        icon: 'add_circle_outline'
                    },
                    {
                        id: 6,
                        title: 'Manage Users',
                        icon: 'settings'
                    },
                    {
                        id: 7,
                        title: 'Logout',
                        icon: 'logout'
                    }
                ];

            } else if (UserDet.Type.Id == "Manager") {
                $rootScope.managerFlag = true;
                $scope.menu = [
                    {
                        id: 1,
                        title: 'Product List',
                        icon: 'list'
                    },
                    {
                        id: 3,
                        title: 'Manage Products',
                        icon: 'storage'
                    }
                ];
                $scope.admin = [
                    {
                        id: 5,
                        title: 'Add User',
                        icon: 'add_circle_outline'
                    },
                    {
                        id: 7,
                        title: 'Logout',
                        icon: 'logout'
                    }

                ];

            } else if (UserDet.Type.Id == "Store_Keeper") {
                $rootScope.storeKeeper = true;
                $scope.menu = [
                    {
                        id: 1,
                        title: 'Product List',
                        icon: 'list'
                    },
                    {
                        id: 2,
                        title: 'Add Product',
                        icon: 'add_circle_outline'
                    }
                ];
                $scope.admin = [
                    {
                        id: 7,
                        title: 'Logout',
                        icon: 'logout'
                    }
                ];
            }

        }

    };

    $scope.InitializedController();

    $rootScope.$on('LoginEvent', function (event, data) {
        sessionStorage.LoginUser = JSON.stringify(data.User);
        $scope.User = data.User.Name;
        $scope.UserEmail = data.User.Email;
        $scope.InitializedController();
    });

    $scope.ClickItem = function (item) {
        $mdSidenav('left').close();
        if (item.id == 1) {
            $state.go('products');
        } else if (item.id == 2) {
            $state.go('addproducts');
        } else if (item.id == 3) {

            $state.go('manageproducts');
        } else if (item.id == 5) {
            $state.go('adduser');
        } else if (item.id == 6) {
            $state.go('manageusers');
        } else if (item.id == 4) {
            $mdDialog.show({
                    controller: 'LoginCtrl',
                    templateUrl: 'login.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        }else if(item.id ==7){
            $scope.LogOut();
        }

    };

}]);