app.controller("TestController", function($scope, TestService){
    $scope.hello = "Hello World";
    
    $scope.people = TestService.getPeople();
})