app.controller('AsideCtrl',['$scope','$state',function($scope,$state){
    
    
    $scope.ClickItem=function(item){
        if(item.id==1){
            $state.go('products');
        }else if(item.id==2){
            $state.go('addproducts');
        }else if(item.id==3){
            $state.go('manageproducts');
        }else if(item.id==5){
            $state.go('adduser');
        }else if(item.id==6){
            $state.go('manageusers');
        }
        
    };
    $scope.menu = [
        {
          id : 1,
          title: 'Product List',
          icon: 'list'
        },
        {
          id : 2,
          title: 'Add Product',
          icon: 'add_circle_outline'
        },
        {
          id : 3,
          title: 'Manage Products',
          icon: 'storage'
        }
    ];
    $scope.admin = [
        {
          id : 4,
          title: 'Login',
          icon: 'login'
        },
        {
          id : 5,
          title: 'Add User',
          icon: 'add_circle_outline'
        },
        {
          id : 6,
          title: 'Manage Users',
          icon: 'settings'
        }
    ];
}]);