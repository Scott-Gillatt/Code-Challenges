app.controller("FireController", function ($scope, $firebaseObject){
    var ref = new Firebase ("https://bcw2016winter.firebaseio.com/data");
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, "data");
    
})