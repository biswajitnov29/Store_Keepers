app.controller('AddUserCtrl',['$scope','ShopkeeperService','$state',function($scope,ShopkeeperService,$state){
    
    
    
    $scope.InitializedObject=function(){
        
        $scope.NewUser={
            "Name":"",
            "Email":"",
            "Password":""
        };
        $scope.GetUserTypes();
    };
    
    $scope.GetUserTypes=function(){
        $scope.UserTypes=ShopkeeperService.GetUserType();
    };
    
    $scope.AddUser=function(){
        ShopkeeperService.AddUser($scope.NewUser);
        $state.go('adduser', {to: $state.current.name}, {reload: true});
    };
    
    $scope.InitializedObject();
    
}]);