app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/products');
    
    $stateProvider.state('products', {
        url: '/products',  
        controller: 'ProductsCtrl',
        templateUrl:'PartialViews/products.html'
    });
}]);