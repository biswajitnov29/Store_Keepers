app.service('ShopkeeperService',['$q',function($q){
    
    
    this.GetProducts=function(){
        var list = JSON.parse(localStorage.getItem('AvailableProductList'));
        return list;
    };
    
    this.GetPendingProducts=function(){
        var list = JSON.parse(localStorage.getItem('PendingProductList'));
        return list;
    };
    
    
    this.AddProduct=function(product){
        var list = JSON.parse(localStorage.getItem('PendingProductList'));
        if(list==null){
            list=new Array();
        }
        list.push(product);
        localStorage["PendingProductList"] = JSON.stringify(list);
    };
    
    this.AddToAvailableProductList=function(product){
        var pendinglist = JSON.parse(localStorage.getItem('PendingProductList'));
        var index=pendinglist.indexOf(product);
        var object=pendinglist.splice(index);
        localStorage["PendingProductList"] = JSON.stringify(pendinglist);
        
        var list = JSON.parse(localStorage.getItem('AvailableProductList'));
        if(list==null){
            list=new Array();
        }
        list.push(object[0]);
        localStorage["AvailableProductList"] = JSON.stringify(list);
    };
    
    this.DeleteProduct=function(product){
        var list = JSON.parse(localStorage.getItem('AvailableProductList'));
        
        var result = list.filter(function( obj ) {
            return obj.Name == product.Name;
        });
        
        var index=list.indexOf(result[0]);
        var object=list.splice(index);
        localStorage["AvailableProductList"] = JSON.stringify(list);
    };
    
    this.GetUserType=function(){
        var userTypeList = JSON.parse(localStorage.getItem('UserTypeList'));
        return userTypeList
    };
    
    this.AddUser=function(user){
        var list = JSON.parse(localStorage.getItem('UserList'));
        if(list==null){
            list=new Array();
        }
        list.push(user);
        localStorage["UserList"] = JSON.stringify(list);
        
    };
    
    this.GetUserList=function(){
        var userList = JSON.parse(localStorage.getItem('UserList'));
        if(userList==null){
            userList=new Array();
        }
        angular.forEach(userList, function(value, key) {
            value.Type=JSON.parse(value.Type);
        });
        return userList;
    };
    
    
}]);