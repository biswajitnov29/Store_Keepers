app.controller('AddProductsCtrl',['$scope','ShopkeeperService','$state','$rootScope',function($scope,ShopkeeperService,$state,$rootScope){
    
    
    $rootScope.PageHeader="Add Product";
    $scope.InitializedObject=function(){
        $scope.NewProduct={
            "ID":"P"+ShopkeeperService.GetUniqueNumber(),
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