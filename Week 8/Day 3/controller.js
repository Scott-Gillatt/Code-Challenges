app.controller('List', function ($scope) {
  $scope.items = [{item: "test"}];
  
  $scope.addItems = function () {
      
      $scope.items.push({
          item: $scope.newitem.item
      })
  }
});