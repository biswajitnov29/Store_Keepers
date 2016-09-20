app.controller('AddUserCtrl',['$scope','ShopkeeperService','$state','$rootScope',function($scope,ShopkeeperService,$state,$rootScope){
    
    
    $rootScope.PageHeader="Add User";
    $scope.InitializedObject=function(){
        
        $scope.NewUser={
            "ID":"U"+ShopkeeperService.GetUniqueNumber(),
            "Name":"",
            "Email":"",
            "Password":""
        };
        $scope.GetUserTypes();
    };
    
    $scope.GetUserTypes=function(){
        $scope.UserTypes=ShopkeeperService.GetUserType();
        if($rootScope.managerFlag){
            var modifiedList=[];
            angular.forEach($scope.UserTypes,function(item){
                if(item.Id=="Store_Keeper"){
                    modifiedList.push(item);
                };
            });
            $scope.UserTypes=modifiedList;
        };
    };
    
    $scope.AddUser=function(){
        $scope.NewUser.Password = Base64.encode($scope.NewUser.Password);
        ShopkeeperService.AddUser($scope.NewUser);
        $state.go('adduser', {to: $state.current.name}, {reload: true});
    };
    
    $scope.InitializedObject();
    
}]);