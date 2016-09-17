app.controller('AsideCtrl',['$scope',function($scope){
    
 	$scope.menu = [
        {
          link : '',
          title: 'Product List',
          icon: 'list'
        },
        {
          link : '',
          title: 'Manage Products',
          icon: 'add_box'
        }
    ];
    $scope.admin = [
        {
          link : '',
          title: 'Login',
          icon: 'login'
        },
        {
          link : '',
          title: 'Manage Users',
          icon: 'settings'
        },
        {
          link : '',
          title: 'Manage Inventary Items',
          icon: 'storage'
        }
    ];
}]);