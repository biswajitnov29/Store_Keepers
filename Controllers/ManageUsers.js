app.controller('ManageUsers', ['$scope', 'ShopkeeperService', function ($scope, ShopkeeperService) {
    
    $scope.AdminUsers=[];
    $scope.ManagerUsers=[];
    $scope.StoreKeepers=[];
    
    $scope.GetUserList=function(){
        
        var userList=ShopkeeperService.GetUserList();
        $scope.AdminUsers = userList.filter(function( obj ) {
            
            return obj.Type.Id == "Admin";
        });
        $scope.ManagerUsers = userList.filter(function( obj ) {
            return obj.Type.Id == "Manager";
        });
        $scope.StoreKeepers = userList.filter(function( obj ) {
            return obj.Type.Id == "Store_Keeper";
        });
    };
    
    $scope.GetUserList();
    
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.getTypes = function () {
        return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    }

    $scope.logItem = function (item) {
        console.log(item.name, 'was selected');
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }

}]);