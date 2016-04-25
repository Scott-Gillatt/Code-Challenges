app.controller('IncreaseController', function ($scope) {
    $scope.numbers = 0;
    $scope.increase = function () {
        $scope.numbers++;
    }
    $scope.decrease = function () {
        $scope.numbers--;
    }
    $scope.times = function () {
        $scope.numbers * $scope.numbers;
    }
    
    $scope.leapyears = function (year){
        console.log(year)
        $scope.answer = 2016 - year;
        $scope.answer = Math.floor($scope.answer / 4);
        return $scope.answer
    }
    
})