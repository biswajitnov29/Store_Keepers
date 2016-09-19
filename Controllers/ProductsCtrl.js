app.controller('ProductsCtrl',['$scope','ShopkeeperService',function($scope,ShopkeeperService){
    
    $scope.ProductLists=[];
    $scope.GetProductList=function(){
        $scope.ProductLists=ShopkeeperService.GetProducts();
    };
    
    
    $scope.GetProductList();
    
}]);