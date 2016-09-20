app.controller('LoginCtrl',['$scope','ShopkeeperService','$rootScope','$mdDialog',function($scope,ShopkeeperService,$rootScope,$mdDialog){
    
    $scope.user={};
    $scope.error=false;
    $scope.errorMsg="Invalid Login";
    
    $scope.ValidateUser=function(){
        
        var UserList=ShopkeeperService.GetUserList();
        
        
        var result = UserList.filter(function( user ) {
            
            user.Password = Base64.decode(user.Password);
            
            if(user.Email==$scope.user.username && user.Password==$scope.user.password){
                
                $rootScope.$broadcast('LoginEvent', {
                    User: user 
                });
                return true;
            }
            return false;
        });
        
        if(result.length>0){
            $mdDialog.hide();
        }else{
            $scope.error=true;
        }
        
    };
    
    
}]);