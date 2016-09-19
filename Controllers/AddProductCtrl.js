app.controller('AddProductsCtrl',['$scope','ShopkeeperService','$state',function($scope,ShopkeeperService,$state){
    
    
    
    $scope.InitializedObject=function(){
        
        $scope.NewProduct={
            "Name":"",
            "Description":"",
            "Quantity":0
        };
        
    };
    
    $scope.AddProduct=function(){
        ShopkeeperService.AddProduct($scope.NewProduct);
        $state.go('addproducts', {to: $state.current.name}, {reload: true});
    };
    
    $scope.InitializedObject();
    
}]);