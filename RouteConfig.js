app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/products');
    
    $stateProvider.state('products', {
        url: '/products',  
        controller: 'ProductsCtrl',
        templateUrl:'PartialViews/products.html'
    }).state('addproducts', {
        url: '/addproducts',  
        controller: 'AddProductsCtrl',
        templateUrl:'PartialViews/addproduct.html'
    }).state('adduser', {
        url: '/adduser',  
        controller: 'AddUserCtrl',
        templateUrl:'PartialViews/adduser.html'
    }).state('manageproducts', {
        url: '/manageproducts',  
        controller: 'ManageProducts',
        templateUrl:'PartialViews/manageproducts.html'
    }).state('manageusers', {
        url: '/manageusers',  
        controller: 'ManageUsers',
        templateUrl:'PartialViews/manageusers.html'
    });
}]);