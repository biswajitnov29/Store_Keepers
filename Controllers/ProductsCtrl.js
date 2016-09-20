app.controller('ProductsCtrl',['$scope','ShopkeeperService','$rootScope',function($scope,ShopkeeperService,$rootScope){
    
    $rootScope.PageHeader="Products";
    
    $scope.ProductLists=[];
    $scope.GetProductList=function(){
        $scope.ProductLists=ShopkeeperService.GetProducts();
    };
    
    
    $scope.GetProductList();
    
}]);