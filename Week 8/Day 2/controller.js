app.controller('FinalCountDown', function ($scope, $timeout) {
    $scope.count = 5;

    function countDown() {
        if ($scope.count > 0) {
            $scope.count--
            $scope.createTimer()
        }
    }

    $scope.createTimer = function () {
        $scope.hide = true;
        $timeout(countDown, 1000);
    }

    $scope.reset = function () {
        $scope.count = 5;
        $scope.hide = false;
        // $timeout.cancel($scope.createTimer);
    }

});